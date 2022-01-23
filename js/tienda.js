//Variables necesarias para la consulta
var getproduct = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/product/'
var namevalue = ''

//Variables de configuracion para realizar la consulta
var myHeaders = new Headers();
var myInit = {
                mode: 'cors',
                headers: {},
                cache: 'default'
            };

$('#buscar').on('input', function(){
    namevalue = document.getElementById('buscar').value;
    getitems(namevalue);
});

//Realiza la consulta y lectura de la api
async function getitems(val){
    const response = await fetch(getproduct+val,myInit);
    const row = await response.json();
    //Recorre los elementos del Api para poder Crear la tabla
    if(row.data.length>0){
        var temp="";
        var aux = 0;
        var cataux =row.data[0].category;
        row.data.forEach((itemdata) =>{
            if(itemdata.name==row.data[0].name){
                temp+="<h1>"+itemdata.category+"</h1>"
            }else if(aux==0 && itemdata.category!=cataux){
                temp+="<br><br>"
                temp+="<h1>"+itemdata.category+"</h1>"
            }
            if(aux==0){
                temp+="<tr>"
            }else if(itemdata.category!=cataux){
                temp+="</tr>"
                temp+="<br><br>"
                temp+="<h1>"+itemdata.category+"</h1>"
                temp+="<tr>"
                aux=0;
            }
            if(itemdata.url_image==null){
                itemdata.url_image=""
            }
            temp+="<td><h3>"+itemdata.name+"</h3><br>"+"<picture><source srcset='"+itemdata.url_image+"'><img srcset='https://account.ache.org/nfache1test/eWeb/images/DEMO1/notavailable.jpg' alt='"+itemdata.name+"' width='150' height='150'></picture>"+"<br>Precio: $"+itemdata.price+"<br>Tipo: "+itemdata.category+"</td>"
            aux+=1;
            cataux=itemdata.category
            if(aux==3 && itemdata.category==cataux){
                temp+="</tr>";
                aux=0;
            }
        });
        document.getElementById('btable').innerHTML = temp;
    }
}

$(document).ready(getitems(namevalue));
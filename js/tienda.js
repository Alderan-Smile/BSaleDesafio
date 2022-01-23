var getproduct = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/product/'
var getcategory = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/category/'
var namevalue = ''
var idvalue = ''
var myHeaders = new Headers();
var myInit = {
                mode: 'cors',
                headers: {},
                cache: 'default'
            };

$('#buscar').val("").trigger("input");

$('#buscar').on('input', function(){
    namevalue = document.getElementById('buscar').value;
    getitems(namevalue);
});

async function getitems(val){
    const response = await fetch(getproduct+val,myInit);
    const row = await response.json();
    console.log(row.data.length)
    if(row.data.length>0){
        var temp="";
        var sourcealt = ""
        row.data.forEach((itemdata) =>{
            var jpp;
            if(itemdata.url_image==null){
                jpp="img/notfound.png"
            }else{
                jpp=itemdata.url_image
            }
            temp+="<tr>"
            temp+="<td><h3>"+itemdata.name+"<br>"+"<img src='"+jpp+"' width='150' height='150'>"+"<br>Precio: $"+itemdata.price+"</td>"
        });
        document.getElementById('btable').innerHTML = temp;
    }
}

async function getclass(val){
    const response = await fetch(getcategory+val,myInit);
    const row = await response.json();
}



$(document).ready(getitems(namevalue));
$(document).ready(getclass(idvalue));
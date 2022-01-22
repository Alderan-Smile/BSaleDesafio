var getproduct = 'https://xq17f6g7gc.execute-api.us-east-1.amazonaws.com/dev/product/'
var getcategory = 'https://xq17f6g7gc.execute-api.us-east-1.amazonaws.com/dev/category/'

$('#buscar').val("").trigger("input")

$('#buscar').on('input', function(){
    alert("changed");
});

async function getcontent(val){
    const response = await fetch(getproduct, {
        method: 'GET',
        mode: 'no-cors'
    });
    const row = await response.json();
    console.log(row)
}

/*function putGreeting() {
    var p_hi;
    p_hi = $('#hi');
    p_hi.text('Hello world!');
}*/

$(document).ready(getcontent());
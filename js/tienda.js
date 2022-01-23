var getproduct = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/product/'
var getcategory = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/category/'
var myHeaders = new Headers();
var myInit = {
                mode: 'cors',
                headers: {},
                cache: 'default'
            };
var myRequest = new Request(getproduct,myInit);

$('#buscar').val("").trigger("input")

$('#buscar').on('input', function(){
    alert("changed");
});

async function getcontent(){
    const response = await fetch(myRequest);
    const row = await response.json();
    console.log(row);
}

/*function putGreeting() {
    var p_hi;
    p_hi = $('#hi');
    p_hi.text('Hello world!');
}*/

$(document).ready(getcontent());
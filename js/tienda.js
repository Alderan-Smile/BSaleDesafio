var getproduct = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/product/'
var getcategory = 'https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/category/'
var myHeaders = new Headers();
var myInit = {
                mode: 'cors',
                headers: {
                    "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Methods": "OPTIONS,GET"
                },
                cache: 'default'
            };
var myRequest = new Request(getproduct,myInit);

$('#buscar').val("").trigger("input")

$('#buscar').on('input', function(){
    alert("changed");
});

async function getcontent(val){
    const response = await fetch(myRequest);
    const row = await response.json();
    console.log(row)
}

/*function putGreeting() {
    var p_hi;
    p_hi = $('#hi');
    p_hi.text('Hello world!');
}*/

$(document).ready(getcontent());
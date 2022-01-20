function putGreeting() {
    var field, name, p_hi;
    field = $('#who');
    name = field.val();
    p_hi = $('#hi');
    p_hi.text('Hello ' + name + '!');
}

function configureSubmit() {
    var b;
    b = $('#done');
    b.click(putGreeting);
}

$(document).ready(configureSubmit);
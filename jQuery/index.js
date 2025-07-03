// alert("Hello query")
// $("h1").css("color", "red")
$("h1").addClass('big-title')
// $("a").attr('href','https://www.bing.com')

$(document).keypress(function(evt){
    $('h1').html(evt.key)
})

$('h1').on('mouseover',function(){
    $('h1').css('color','red')
})
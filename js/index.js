console.log("this works");
$("#DownloadResume").on("click", function(){
    console.log("SomeoneClicked");
});
$(".flexContainer div").mouseenter(function(){
    $(this).css("width", "40%")
});
$(".flexContainer div").mouseleave(function(){
    $(this).css("width", "33%")
});
// This is a JavaScript file

 var MC = monaca.cloud;

//function onSaveBtn(){
$(document).on('click', '#saveBtn', function(){
  var title = $("#title").val();
  var artisis = $("#artisis").val();
  var livehouse = $("#livehouse").val();
  console.log('save');
  if (title != '')
  {
    addEvent(title,artisis,livehouse);
  }
//}
 });

function addEvent(title,artisis,livehouse) {
  var event = MC.Collection("Event");
  event.insert({ title: title, artisis: artisis, livehouse: livehouse})
  .done(function(insertedItem)
  {
    console.log('Insert is success!');
    $("#title").val();
    $("#artisis").val();
    $("#livehouse").val();
    $.mobile.changePage('#calendar');
      getMemoList();
    //display a dialog stating that the inserting is success
    // $( "#okDialog_add" ).popup("open", {positionTo: "origin"}).click(function(event)
    // {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   getMemoList();
    //   $.mobile.changePage('#calendar');
    //   getMemoList();
    // });
  })
  .fail(function(err){ console.log('Insert failed!');})
}

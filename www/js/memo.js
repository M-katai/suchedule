// This is a JavaScript file

function onSaveBtn()
{
  var title = $("#title").val();
  var artisis = $("#artisis").val();
  if (title != '')
  {
    addMemo(title,artisis);
  }
}

function addMemo(title,artisis) {
  var memo = MC.Collection("Memo");

  memo.insert({ title: title, artisis: artisis})
  .done(function(insertedItem)
  {
    console.log('Insert is success!');
    $("#title").val("");
    $("#artisis").val("");
    //display a dialog stating that the inserting is success
    $( "#okDialog_add" ).popup("open", {positionTo: "origin"}).click(function(event)
    {
      event.stopPropagation();
      event.preventDefault();
      getMemoList();
      $.mobile.changePage('#ListPage');
    });
  })
  .fail(function(err){ console.log('Insert failed!');})
}
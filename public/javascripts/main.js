function alert() {
  alert("div clicked");
}

$('.aComment').click(function() {
  let deleteOrNot = confirm("Delete this comment?");
  if (deleteOrNot) {
    $.ajax({
        url: "/delete-comment/"+$(this).attr('id'),
        type: 'DELETE'
    })
    .then(
      location.reload()
    )
  }
})



$('.project-name').on('click', function () {
  var url = $(this).data('url');
  if (url !== undefined) {
    /*window.location.href = url;*/
    window.open(url, "_blank");
  }
});

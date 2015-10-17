$(document).ready(function(){
  $(".alert, #new_group").hide()

  $("#new_group").on("ajax:success", function (e, data, status, xhr) {
    $(".alert-danger").slideUp()
    $(".alert-success").slideDown()
  }).on("ajax:error", function (e, data, status, xhr) {
    $(".alert-success").slideUp()
    $(".alert-danger").slideDown()
  })

  $(".join").on('click', function (){
    $(".join").hide()
    $('#new_group').slideDown()
  })
})

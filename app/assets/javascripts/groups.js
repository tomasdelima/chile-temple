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

  $(".save").on('click', function () {
    var errors = 0
    $(".name, .email").removeClass('error')
    $(".name, .email").map(function (i, element) {
      if(!element.value) {
        errors += 1
        $(element).addClass('error')
      }
    })
    return !errors
  })
})

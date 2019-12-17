$(document).ready(function(){
  const modal = $('#signin-modal');
  const modalBtn = $('#login-btn');
  
  
  // Events
  modalBtn.on('click', function(){
    modal.attr('style','display: block')
    console.log("clicked")
  });
  

  $(".accountbutton").on("click", function(){
      $("#signin-modal").attr('style', 'display:hidden')
      $("#signup-modal").attr('style', 'display:block')
  });
  $(".accountbutton2").on("click", function(){
    $("#signup-modal").attr('style', 'display:hidden')
    $("#signin-modal").attr('style', 'display:block')
})



});
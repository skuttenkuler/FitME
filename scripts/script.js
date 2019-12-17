$(document).ready(function(){
  const modal = $('#signin-modal');
  const modalBtn = $('#signin-modal-button');
  const closeBtn = $('.close');
  
  // Events
  modalBtn.on('click', openModal);
  closeBtn.on('click', closeModal);

  
  // Open
  function openModal() {
    modal.attr("style","display: visible")
    console.log("clicked")
  }
  
  // Close
  function closeModal() {
    modal.attr("style","display: none")
  }
 



<<<<<<< HEAD



});
=======
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
>>>>>>> a04dcef52e989d3cee7e3bb1d9c9d722ab7c40d6

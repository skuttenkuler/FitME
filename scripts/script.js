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
 






});
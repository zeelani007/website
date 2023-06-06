const btn = document.getElementById('button');

  document.getElementById('contact_form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     btn.value = 'Sending...';
  
     const serviceID = 'default_service';
   const templateID = 'template_fpa1qrg';
   
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('message sent successfully!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
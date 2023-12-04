(function() {
    emailjs.init('Mze5s879Ossmk4K1a'); 
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      emailjs.sendForm('service_6tf2n6t', 'template_0rpw5sf', this)
        .then(function(response) {
          console.log('Success!', response.status, response.text);
          alert('Your message has been sent successfully!');
        }, function(error) {
          console.error('Failed...', error);
          alert('Oops! Something went wrong. Please try again later.');
        });
    });
  })();
document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('profile-photo');
    const photoUrl = 'Pass_size1.jpg'; // Replace with the actual path to your photo
    profilePhoto.src = photoUrl;
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

// slider bar

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Display values in the resume section
        document.getElementById('display-name').textContent = name;
        document.getElementById('display-email').textContent = email;
        document.getElementById('display-education').textContent = education;
        document.getElementById('display-experience').textContent = experience;
        document.getElementById('display-skills').textContent = skills;
    });
});

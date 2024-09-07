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
        var displayName = document.getElementById('display-name');
        var displayEmail = document.getElementById('display-email');
        var displayEducation = document.getElementById('display-education');
        var displayExperience = document.getElementById('display-experience');
        var displaySkills = document.getElementById('display-skills');
        displayName.textContent = name;
        displayEmail.textContent = email;
        displayEducation.textContent = education;
        displayExperience.textContent = experience;
        displaySkills.textContent = skills;
        // Add inline edit functionality
        [displayName, displayEmail, displayEducation, displayExperience, displaySkills].forEach(function (element) {
            element.contentEditable = "true";
            element.style.border = "1px dashed #ccc";
        });
    });
});

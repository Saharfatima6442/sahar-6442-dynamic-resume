document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('resume-form') as HTMLFormElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Display values in the resume section
        (document.getElementById('display-name') as HTMLElement).textContent = name;
        (document.getElementById('display-email') as HTMLElement).textContent = email;
        (document.getElementById('display-education') as HTMLElement).textContent = education;
        (document.getElementById('display-experience') as HTMLElement).textContent = experience;
        (document.getElementById('display-skills') as HTMLElement).textContent = skills;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('resume-form') as HTMLFormElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Display values in the resume section
        const displayName = document.getElementById('display-name') as HTMLElement;
        const displayEmail = document.getElementById('display-email') as HTMLElement;
        const displayEducation = document.getElementById('display-education') as HTMLElement;
        const displayExperience = document.getElementById('display-experience') as HTMLElement;
        const displaySkills = document.getElementById('display-skills') as HTMLElement;

        displayName.textContent = name;
        displayEmail.textContent = email;
        displayEducation.textContent = education;
        displayExperience.textContent = experience;
        displaySkills.textContent = skills;

        // Add inline edit functionality
        [displayName, displayEmail, displayEducation, displayExperience, displaySkills].forEach((element) => {
            element.contentEditable = "true";
            element.style.border = "1px dashed #ccc";
        });
    });
});

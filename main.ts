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


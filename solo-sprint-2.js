document.addEventListener('DOMContentLoaded', function() {
    var skills_origin = document.getElementById('skills_button');
    var skills_target = document.getElementById('skills-title');

    var work_experience_origin = document.getElementById('work_experience_button');
    var work_experience_target = document.getElementById('work-experience-title');
    
    var projects_origin = document.getElementById('projects_button');
    var projects_target = document.getElementById('projects-title');

    var about_me_origin = document.getElementById('about_me_button');
    var about_me_target = document.getElementById('about-me-title');

    var contact_origin = document.getElementById('contact_button');
    var contact_target = document.getElementById('contact-title');

    skills_origin.addEventListener('click', function() {
        skills_target.scrollIntoView({ behavior: 'smooth' });
    });

    work_experience_origin.addEventListener('click', function() {
        work_experience_target.scrollIntoView({ behavior: 'smooth' });
    });

    projects_origin.addEventListener('click', function() {
        projects_target.scrollIntoView({ behavior: 'smooth' });
    });

    about_me_origin.addEventListener('click', function() {
        about_me_target.scrollIntoView({ behavior: 'smooth' });
    });

    contact_origin.addEventListener('click', function() {
        contact_target.scrollIntoView({ behavior: 'smooth' });
    });
});

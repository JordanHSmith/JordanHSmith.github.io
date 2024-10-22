document.addEventListener('DOMContentLoaded', function() {
    // Get the clickable element and target element
    var publications_origin = document.getElementById('publications_button');
    var publications_target = document.getElementById('publications-title');

    var academic_awards_origin = document.getElementById('academic_awards_button');
    var academic_awards_target = document.getElementById('academic-awards-title');

    var research_origin = document.getElementById('research_button');
    var research_target = document.getElementById('research-title');

    var work_experience_origin = document.getElementById('work_experience_button');
    var work_experience_target = document.getElementById('work-experience-title');

    var volunteer_work_origin = document.getElementById('volunteer_work_button');
    var volunteer_work_target = document.getElementById('volunteer-work-title');

    var about_me_origin = document.getElementById('about_me_button');
    var about_me_target = document.getElementById('about-me-title');

    var contact_origin = document.getElementById('contact_button');
    var contact_target = document.getElementById('contact-title');

    // Add a click event listener
    publications_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        publications_target.scrollIntoView({ behavior: 'smooth' });
    });

    academic_awards_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        academic_awards_target.scrollIntoView({ behavior: 'smooth' });
    });

    research_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        research_target.scrollIntoView({ behavior: 'smooth' });
    });

    work_experience_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        work_experience_target.scrollIntoView({ behavior: 'smooth' });
    });

    volunteer_work_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        volunteer_work_target.scrollIntoView({ behavior: 'smooth' });
    });

    about_me_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        about_me_target.scrollIntoView({ behavior: 'smooth' });
    });



    contact_origin.addEventListener('click', function() {
        // Scroll smoothly to the target element
        contact_target.scrollIntoView({ behavior: 'smooth' });
    });
});

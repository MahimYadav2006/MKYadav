document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the appropriate animation class when the element is in view
                if (entry.target.classList.contains('cols')) {
                    // Check if it's the first or second column
                    if (entry.target === document.querySelector('.page2 .cols:first-child')) {
                        entry.target.classList.add('animate-left'); // First column from left
                    } else {
                        entry.target.classList.add('animate-right'); // Second column from right
                    }
                } else if (entry.target.classList.contains('btn')) {
                    entry.target.classList.add('animate-up');
                } else if (entry.target.classList.contains('title')) {
                    entry.target.classList.add('animate-up');
                } else if (entry.target.classList.contains('main-content-of-article')) {
                    entry.target.classList.add('animate-up');
                } else if (entry.target.classList.contains('date-time')) {
                    entry.target.style.opacity = 1; // Ensure date-time opacity is updated
                    entry.target.classList.add('animate-up');
                }
            }
        });
    }, options);

    // Target the elements you want to observe
    const elementsToAnimate = document.querySelectorAll('.page2 .cols, .page2 .btn, .page2 .title, .page2 .main-content-of-article, .page2 .date-time');
    elementsToAnimate.forEach(element => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check for the logo and paragraph, then add the animation class
                if (entry.target.classList.contains('yash-logo')) {
                    entry.target.classList.add('animate-logo'); // Slide in from left
                } else if (entry.target.tagName === 'P' && entry.target.closest('.rest-all-yash')) {
                    entry.target.classList.add('animate-paragraph'); // Slide in from right
                }
            }
        });
    }, options);

    // Observe the logo and paragraph elements
    const logo = document.querySelector('.yash-logo');
    const paragraph = document.querySelector('.rest-all-yash p');
    observer.observe(logo);
    observer.observe(paragraph);
});

document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');

      hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    });
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize team members with staggered animation
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const memberObserver = new IntersectionObserver(function(entries) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add visible class with delay
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          memberObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe each team member
    teamMembers.forEach(member => {
      memberObserver.observe(member);
      
      // Add flip card functionality
      member.addEventListener('click', function() {
        this.querySelector('.member-card').classList.toggle('flipped');
      });
      
      // Prevent flipping on button clicks
      member.querySelectorAll('.team-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      });
    });
    
    // Observe heading for animation
    const headingObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          headingObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    headingObserver.observe(document.querySelector('.team-heading'));
  });
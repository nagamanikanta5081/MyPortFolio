// Project data
const projects = [
    {
        title: "Hospital Management System",
        description: "Built a Spring Boot–based CRUD application for managing doctors and patients using a layered architecture (Model, Repository, Service, Controller).",
        image: "https://www.hfmmagazine.com/sites/default/files/hfmmagazine/ext/resources/images/2016/October/1116_upfront_microhospital_BSW.jpg",
        github: "https://github.com/nagamanikanta5081/Hospital-Management-System---Using-RestAPI-SpringBoot.git",
        live: "",
        tools: "Spring Tool Suite, Postman",
        skills: "Java, Spring Boot, REST API, MySQL"
    },
    {
        title: "Employee Management System",
        description: "Designed and developed a dynamic web-based Employee Management System using Java, JSP, Spring Boot and MySQL with full CRUD functionality.",
        image: "https://i.pinimg.com/originals/5f/fe/13/5ffe13ba7daafcc98e81cc5970e6936c.jpg",
        github: "https://github.com/nagamanikanta5081/Employee-Management-Syst---SpringBoot.git",
        live: "",
        tools: "Spring Tool Suite",
        skills: "Java, JSP, Spring Boot, HTML, CSS, Bootstrap, MySQL"
    },
    {
        title: "Library Management System",
        description: "A comprehensive library management system built with Spring Boot for efficient book tracking and member management.",
        image: "https://thumbs.dreamstime.com/b/open-book-table-library-background-open-book-table-library-background-symbolizing-concept-331170058.jpg",
        github: "https://github.com/nagamanikanta5081/Library-ManagementSystem---Using-SpringBoot.git",
        live: "",
        tools: "Spring Tool Suite",
        skills: "Java, JSP, Spring Boot, HTML, CSS, Bootstrap, MySQL"
    },
    {
        title: "Banking Management System",
        description: "Built a Java-based system for account management, transactions, and balance inquiries with robust exception handling.",
        image: "https://lh3.googleusercontent.com/YzUoXJRb8YiuA5PRZRfEBe65117SjBNyvIjIhfnom9muUC9Ts8y6kb7kKcIIFWfwK3TDnKIbqgHoiF6UmNn_TxqGXAiFunmv=w3840-h2160-c-rw-v3",
        github: "https://github.com/nagamanikanta5081/Banking-Management-Sys.....git",
        live: "",
        tools: "Eclipse IDE",
        skills: "Java"
    },
    {
        title: "Healthy Organic Servs",
        description: "Built a fully responsive multi-section website using HTML, CSS, and Bootstrap with interactive UI elements.",
        image: "https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg",
        github: "",
        live: "https://healthy-servs.vercel.app/",
        tools: "VS Code",
        skills: "HTML, CSS, Bootstrap"
    },
    {
        title: "Simple Insta Clone",
        description: "A MySQL-based Instagram clone demonstrating database design and management skills.",
        image: "https://blogflying.co.uk/wp-content/uploads/2025/11/Restringir-bloquear-y-silenciar-a-alguien-en-Instagram-1.jpg.webp",
        github: "https://github.com/nagamanikanta5081/InstaProject---MySQL.git",
        live: "",
        tools: "MySQL Command Line Client",
        skills: "MySQL"
    }
];

// Certificate data
const certificates = [
    {
        title: "CISCO-CCNAv7",
        description: "Introduction to Networks, Switching and Routing",
        link: "https://www.linkedin.com/posts/nagamanikanta160302_cisconetworkingacademy-ccna-networking-activity-7391177782975832064-q073",
        type: "Networking"
    },
    {
        title: "Full Stack Java Development Certification",
        description: "Certification of completion along with Cloud Deployment",
        link: "https://www.linkedin.com/posts/nagamanikanta160302_120daysoflearning-destinationcodegnan-java-activity-7397322316113727488-oVjf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC1-NQBtoJ7tE0Mo-V_YPqJQc-hcx25sg8",
        type: "Database"
    },
    {
        title: "International Scientific Conference",
        description: "Research presentation and participation certificate",
        link: "https://www.linkedin.com/posts/nagamanikanta160302_btech-finalyearproject-research-activity-7388983370396954624-fnU4",
        type: "Conference"
    },
    {
        title: "HackerRank - Java (Basic)",
        description: "Java programming fundamentals certification",
        link: "https://www.hackerrank.com/certificates/iframe/10dac254d12b",
        type: "Programming"
    }
];

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Load components based on current page
    if (document.getElementById('projects-container')) {
        loadProjects();
    }
    if (document.getElementById('certificates-container')) {
        loadCertificates();
    }
    
    initScrollEffects();
    initContactForm();
    initSkillAnimations();
    initResumeButtons();
});

// Load projects dynamically
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach((project, index) => {
        const projectCard = `
            <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card project-card">
                    <div class="position-relative overflow-hidden">
                        <img src="${project.image}" class="card-img-top project-img" alt="${project.title}">
                        <div class="project-overlay">
                            <div class="project-links">
                                ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-primary btn-sm m-1"><i class="fab fa-github"></i></a>` : ''}
                                ${project.live ? `<a href="${project.live}" target="_blank" class="btn btn-primary btn-sm m-1"><i class="fas fa-external-link-alt"></i></a>` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <p class="text-muted small"><strong>Tools:</strong> ${project.tools}</p>
                        <p class="text-muted small"><strong>Skills:</strong> ${project.skills}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectCard;
    });
}

// Load certificates dynamically
function loadCertificates() {
    const container = document.getElementById('certificates-container');
    
    certificates.forEach((cert, index) => {
        const certCard = `
            <div class="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay="${index * 100}">
                <div class="card certificate-card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-certificate fa-3x text-primary mb-3"></i>
                        <h5 class="card-title">${cert.title}</h5>
                        <p class="card-text small">${cert.description}</p>
                        <span class="badge bg-secondary">${cert.type}</span>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <a href="${cert.link}" target="_blank" class="btn btn-outline-primary w-100">View Certificate</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += certCard;
    });
}

// Initialize scroll effects
function initScrollEffects() {
    const backToTop = document.getElementById('backToTop');
    const navbar = document.querySelector('.navbar');
    
    if (backToTop && navbar) {
        window.addEventListener('scroll', () => {
            // Back to top button
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
            
            // Navbar background
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Back to top functionality
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize contact form with email functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Create email body
            const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:vadhinenimanikanta@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert(`Thank you for your message, ${name}! Your email client will open with the message pre-filled. Please click send to complete the process.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
}

// Initialize resume buttons functionality
function initResumeButtons() {
    const downloadBtn = document.querySelector('a[download]');
    const viewBtn = document.querySelector('a[target="_blank"]');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Check if file exists
            const resumeUrl = this.getAttribute('href');
            fetch(resumeUrl)
                .then(response => {
                    if (!response.ok) {
                        e.preventDefault();
                        alert('Resume file not found. Please check if "NagaManikanta_FullStackDeveloper.pdf" exists in the same folder.');
                    }
                })
                .catch(error => {
                    e.preventDefault();
                    alert('Resume file not found. Please check if "NagaManikanta_FullStackDeveloper.pdf" exists in the same folder.');
                });
        });
    }
    
    if (viewBtn) {
        viewBtn.addEventListener('click', function(e) {
            const resumeUrl = this.getAttribute('href');
            fetch(resumeUrl)
                .then(response => {
                    if (!response.ok) {
                        e.preventDefault();
                        alert('Resume file not found. Please check if "NagaManikanta_FullStackDeveloper.pdf" exists in the same folder.');
                    }
                })
                .catch(error => {
                    e.preventDefault();
                    alert('Resume file not found. Please check if "NagaManikanta_FullStackDeveloper.pdf" exists in the same folder.');
                });
        });
    }
}

// Initialize skill animations
function initSkillAnimations() {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add project overlay styles dynamically
function addProjectOverlayStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
            opacity: 1;
        }
        
        .project-links {
            display: flex;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addProjectOverlayStyles);
} else {
    addProjectOverlayStyles();
}
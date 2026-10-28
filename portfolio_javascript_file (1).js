/**
 * Dynamic Portfolio Builder & Scripts
 * Developer: Vamsi Krishna
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inject Tailwind CSS & Font Awesome dynamically if not present
    injectStylesheets();

    // Render HTML structure into body
    renderPortfolio();

    // Initialize interactive scripts
    initThemeToggle();
    initMobileMenu();
});

function injectStylesheets() {
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(googleFonts);
}

function renderPortfolio() {
    document.body.className = "bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300";

    const portfolioHTML = `
        <!-- Navigation Bar -->
        <nav class="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <a href="#home" class="text-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
                        Vamsi Krishna
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-8 font-medium text-sm">
                        <a href="#about" class="hover:text-sky-500 transition-colors">About</a>
                        <a href="#skills" class="hover:text-sky-500 transition-colors">Skills</a>
                        <a href="#experience" class="hover:text-sky-500 transition-colors">Experience</a>
                        <a href="#projects" class="hover:text-sky-500 transition-colors">Projects</a>
                        <a href="#contact" class="hover:text-sky-500 transition-colors">Contact</a>
                        
                        <button id="theme-toggle" class="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 focus:outline-none">
                            <i id="theme-icon" class="fas fa-moon"></i>
                        </button>
                    </div>

                    <div class="md:hidden flex items-center space-x-3">
                        <button id="theme-toggle-mobile" class="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            <i id="theme-icon-mobile" class="fas fa-moon"></i>
                        </button>
                        <button id="mobile-menu-btn" class="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-500">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-3">
                <a href="#about" class="block py-2 hover:text-sky-500 transition-colors">About</a>
                <a href="#skills" class="block py-2 hover:text-sky-500 transition-colors">Skills</a>
                <a href="#experience" class="block py-2 hover:text-sky-500 transition-colors">Experience</a>
                <a href="#projects" class="block py-2 hover:text-sky-500 transition-colors">Projects</a>
                <a href="#contact" class="block py-2 hover:text-sky-500 transition-colors">Contact</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <div class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/60 rounded-full border border-sky-300 dark:border-sky-800">
                        Welcome to my portfolio
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Hi, I'm <span class="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Vamsi Krishna</span>
                    </h1>
                    <h2 class="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-400">
                        Full Stack Software Developer
                    </h2>
                    <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                        I build adaptable, full-stack web applications and scalable software solutions with a focus on seamless user experience, clean architecture, and modern dynamic design.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-2">
                        <a href="#projects" class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl shadow-lg shadow-sky-500/25 transition-all">
                            View Projects
                        </a>
                        <a href="#contact" class="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-sky-500 font-medium rounded-xl transition-all">
                            Contact Me
                        </a>
                    </div>
                    <div class="flex space-x-5 text-xl text-slate-500 dark:text-slate-400 pt-4">
                        <a href="https://github.com" target="_blank" class="hover:text-sky-500 transition-colors"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com" target="_blank" class="hover:text-sky-500 transition-colors"><i class="fab fa-linkedin"></i></a>
                        <a href="mailto:vamsi@example.com" class="hover:text-sky-500 transition-colors"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-1 shadow-2xl">
                        <div class="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                            <i class="fas fa-user-code text-8xl text-sky-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-slate-100/50 dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <h2 class="text-3xl font-bold">About Me</h2>
                    <div class="w-16 h-1 bg-sky-500 mx-auto my-3 rounded-full"></div>
                    <p class="text-slate-600 dark:text-slate-400">Motivated, adaptable individual with a relentless drive for tech innovation.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="space-y-4 text-slate-600 dark:text-slate-300">
                        <p>
                            I am a Software Developer with experience in building end-to-end web applications, automating complex workflows, and engineering scalable back-end solutions.
                        </p>
                        <p>
                            With a solid foundation in computer science and modern JavaScript frameworks like React and Node.js, I bridge the gap between creative visual design and optimized system backends.
                        </p>
                        <div class="grid grid-cols-2 gap-4 pt-4 font-medium">
                            <div><span class="text-sky-500">Degree:</span> B.Tech / Computer Science</div>
                            <div><span class="text-sky-500">Location:</span> India</div>
                            <div><span class="text-sky-500">Focus:</span> Full Stack Web Dev</div>
                            <div><span class="text-sky-500">Availability:</span> Open to Opportunities</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center">
                            <h3 class="text-3xl font-extrabold text-sky-500 mb-1">3+</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Years Experience</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center">
                            <h3 class="text-3xl font-extrabold text-sky-500 mb-1">15+</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Projects Completed</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center">
                            <h3 class="text-3xl font-extrabold text-sky-500 mb-1">10+</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Technologies</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center">
                            <h3 class="text-3xl font-extrabold text-sky-500 mb-1">100%</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Commitment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl font-bold">Skills & Technologies</h2>
                <div class="w-16 h-1 bg-sky-500 mx-auto my-3 rounded-full"></div>
                <p class="text-slate-600 dark:text-slate-400">Technologies and tools I work with to build high-performance products.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="p-3 bg-sky-100 dark:bg-sky-950/60 rounded-xl text-sky-600 dark:text-sky-400">
                            <i class="fas fa-code text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">Frontend</h3>
                    </div>
                    <ul class="space-y-3 font-medium text-slate-600 dark:text-slate-300">
                        <li class="flex items-center"><i class="fab fa-react text-sky-500 w-6"></i> React.js</li>
                        <li class="flex items-center"><i class="fab fa-js text-yellow-500 w-6"></i> JavaScript (ES6+)</li>
                        <li class="flex items-center"><i class="fab fa-html5 text-orange-500 w-6"></i> HTML5 / CSS3</li>
                        <li class="flex items-center"><i class="fab fa-bootstrap text-purple-500 w-6"></i> Tailwind CSS</li>
                    </ul>
                </div>

                <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="p-3 bg-indigo-100 dark:bg-indigo-950/60 rounded-xl text-indigo-600 dark:text-indigo-400">
                            <i class="fas fa-server text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">Backend & DB</h3>
                    </div>
                    <ul class="space-y-3 font-medium text-slate-600 dark:text-slate-300">
                        <li class="flex items-center"><i class="fab fa-node-js text-green-500 w-6"></i> Node.js / Express</li>
                        <li class="flex items-center"><i class="fas fa-database text-blue-500 w-6"></i> PostgreSQL / MySQL</li>
                        <li class="flex items-center"><i class="fas fa-leaf text-emerald-500 w-6"></i> MongoDB</li>
                        <li class="flex items-center"><i class="fas fa-network-wired text-sky-500 w-6"></i> RESTful APIs</li>
                    </ul>
                </div>

                <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="p-3 bg-purple-100 dark:bg-purple-950/60 rounded-xl text-purple-600 dark:text-purple-400">
                            <i class="fas fa-tools text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">Tools & Cloud</h3>
                    </div>
                    <ul class="space-y-3 font-medium text-slate-600 dark:text-slate-300">
                        <li class="flex items-center"><i class="fab fa-aws text-orange-400 w-6"></i> AWS</li>
                        <li class="flex items-center"><i class="fab fa-git-alt text-red-500 w-6"></i> Git / GitHub</li>
                        <li class="flex items-center"><i class="fab fa-figma text-pink-500 w-6"></i> Figma</li>
                        <li class="flex items-center"><i class="fas fa-vial text-sky-500 w-6"></i> Postman / CI/CD</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="py-20 bg-slate-100/50 dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold">Work Experience</h2>
                    <div class="w-16 h-1 bg-sky-500 mx-auto my-3 rounded-full"></div>
                </div>

                <div class="max-w-3xl mx-auto space-y-8">
                    <div class="relative pl-8 border-l-2 border-sky-500">
                        <div class="absolute -left-2.5 top-0 w-5 h-5 bg-sky-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
                                <h3 class="text-lg font-bold">SDE Project Intern</h3>
                                <span class="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">Aug 2023 - Dec 2023</span>
                            </div>
                            <p class="text-sm font-semibold text-sky-500 mb-3">Offset Carbon</p>
                            <p class="text-slate-600 dark:text-slate-300 text-sm">
                                Built an end-to-end web application focused on calculating and offsetting carbon footprints. Created dynamic front-end features using React and TypeScript, constructed RESTful APIs with Node.js, and deployed on AWS.
                            </p>
                        </div>
                    </div>

                    <div class="relative pl-8 border-l-2 border-sky-500">
                        <div class="absolute -left-2.5 top-0 w-5 h-5 bg-sky-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
                                <h3 class="text-lg font-bold">Software Developer</h3>
                                <span class="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">June 2020 - July 2023</span>
                            </div>
                            <p class="text-sm font-semibold text-sky-500 mb-3">Wipro Technologies</p>
                            <p class="text-slate-600 dark:text-slate-300 text-sm">
                                Architected and developed key automation tools leveraging JavaScript, React, and Node.js. Automated complex workflows, significantly reducing manual effort and improving execution performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl font-bold">Get In Touch</h2>
                <div class="w-16 h-1 bg-sky-500 mx-auto my-3 rounded-full"></div>
                <p class="text-slate-600 dark:text-slate-400">Feel free to reach out for collaborations or opportunities.</p>
            </div>

            <div class="max-w-xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <form id="contact-form" class="space-y-6" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
                    <div>
                        <label class="block text-sm font-medium mb-2">Your Name</label>
                        <input type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-sky-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Your Email</label>
                        <input type="email" required class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-sky-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Message</label>
                        <textarea rows="4" required class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-sky-500"></textarea>
                    </div>
                    <button type="submit" class="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>© ${new Date().getFullYear()} Vamsi Krishna. All rights reserved.</p>
        </footer>
    `;

    document.body.innerHTML = portfolioHTML;
}

function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleMobileBtn = document.getElementById('theme-toggle-mobile');
    const icon = document.getElementById('theme-icon');
    const iconMobile = document.getElementById('theme-icon-mobile');

    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        if (iconMobile) iconMobile.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);
    if (toggleMobileBtn) toggleMobileBtn.addEventListener('click', toggleTheme);
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}
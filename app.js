function App() {
    try {
        React.useEffect(() => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }, []);

        return (
            <div data-name="app" data-file="app.js">
                <Header />
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
                
                <footer className="bg-gray-800 text-white py-8 text-center">
                    <p>&copy; 2025 Julien Rigot. All rights reserved.</p>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));

function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-gray-800">
                            Julien Rigot
                        </div>
                        
                        <div className="hidden md:flex space-x-8">
                            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-600"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 space-y-2">
                            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left py-2 text-gray-600 hover:text-purple-600"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}

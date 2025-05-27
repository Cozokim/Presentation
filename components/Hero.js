function Hero() {
    try {
        const [displayText, setDisplayText] = React.useState('');
        const fullText = 'Expert en IA & Automatisation';

        React.useEffect(() => {
            let index = 0;
            const timer = setInterval(() => {
                if (index < fullText.length) {
                    setDisplayText(fullText.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 100);

            return () => clearInterval(timer);
        }, []);

        return (
            <section data-name="hero" data-file="components/Hero.js" className="gradient-bg min-h-screen flex items-center text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="fade-in">
                        <img
                            src="./images/photoprofil.jpg"
                            alt="Julien Rigot"
    className="w-40 h-40 object-cover rounded-full mx-auto mb-8 border-4 border-white/20"                        />

                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            Julien Rigot
                        </h1>

                        <div className="text-xl md:text-2xl mb-8 h-8">
                            <span className="typing-animation">{displayText}</span>
                        </div>

                        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
                            J’aide les entreprises à automatiser leurs tâches répétitives, exploiter leurs données, et gagner du temps grâce à l’intelligence artificielle.
                        </p>

                        <div className="space-x-4">
                            <button
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Voir mes projets
                            </button>
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                            >
                                Me contacter
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}

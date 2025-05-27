function About() {
    try {
        return (
            <section data-name="about" data-file="components/About.js" id="about" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">À propos</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="fade-in">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop"
                                alt="Développement IA"
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="fade-in">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                                Des solutions IA concrètes, conçues pour faire avancer votre business
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Fort de plus de 7 ans d’expérience, j’aide les entreprises à tirer le meilleur parti de l’intelligence artificielle pour gagner du temps, automatiser les tâches répétitives, réduire les erreurs et accélérer leur croissance.
                            </p>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Mon profil mêle expertise technique et compréhension des enjeux métiers. Grâce à une approche inspirée du lean consulting, je conçois des solutions qui allient efficacité, simplicité et impact concret sur vos résultats.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600">20+</div>
                                    <div className="text-gray-600">projets automatisés</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600">7+ ans</div>
                                    <div className="text-gray-600">d'expérience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
}

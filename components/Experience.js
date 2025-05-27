function Experience() {
    try {
        const experiences = [
            {
                title: 'Data Scientist / Ingénieur IA R&D',
                company: 'LIS Data Solutions (Espagne)',
                period: 'Mars 2023 – Avril 2025',
                description:
                    "Responsable d'équipe R&D sur des projets IA innovants. Mise en œuvre de LLM et d’agents IA pour des cas concrets, avec formation des équipes pour pérenniser les résultats.",
                icon: 'fas fa-brain'
            },
            {
                title: 'Data Scientist Freelance',
                company: 'Indépendant (Paris)',
                period: 'Mars 2021 – Mars 2023',
                description:
                    "Création et entrainement de modèles IA (recommandation, vision, NLP) et automatisation de traitements pour améliorer les process métiers de mes différents clients.",
                icon: 'fas fa-laptop-code'
            },
            {
                title: 'Consultant Lean',
                company: 'Capgemini (Rennes)',
                period: 'Février 2017 – Novembre 2019',
                description:
                "Optimisation de processus via l’automatisation et la digitalisation. Suivi de l’impact à l’aide d’indicateurs économiques et techniques concrets.",                icon: 'fas fa-industry'
            },
            {
                title: 'Assistant Consultant',
                company: 'L.E.K. Consulting (Londres)',
                period: 'Décembre 2015 – Juin 2016',
                description:
                    "Soutien à des missions de conseil stratégique : analyses, modélisation et recommandations pour grandes entreprises.",
                icon: 'fas fa-chart-line'
            }
        ];

        return (
            <section data-name="experience" data-file="components/Experience.js" id="experience" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Expérience</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 pb-8 fade-in">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                                {index < experiences.length - 1 && (
                                    <div className="absolute left-2 top-4 w-0.5 h-16 bg-purple-200"></div>
                                )}
                                
                                <div className="ml-6">
                                    <div className="flex items-center mb-2">
                                        <i className={`${exp.icon} text-purple-600 mr-3`}></i>
                                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    </div>
                                    <div className="text-purple-600 font-medium mb-1">{exp.company}</div>
                                    <div className="text-gray-500 text-sm mb-3">{exp.period}</div>
                                    <p className="text-gray-600">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Experience component error:', error);
        reportError(error);
    }
}

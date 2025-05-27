function ProjectDetail({ project, isOpen, onClose, projects, setProject }) {
    try {
        if (!isOpen || !project) return null;

        const currentIndex = projects.findIndex(p => p.title === project.title);
        const hasPrevious = currentIndex > 0;
        const hasNext = currentIndex < projects.length - 1;

        const goToPrevious = () => {
            if (hasPrevious) {
                setProject(projects[currentIndex - 1]);
            }
        };

        const goToNext = () => {
            if (hasNext) {
                setProject(projects[currentIndex + 1]);
            }
        };

        return (
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>

                    <div className="relative bg-white rounded-lg max-w-5xl w-full max-h-screen overflow-y-auto px-4">                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                        >
                            <i className="fas fa-times text-2xl"></i>
                        </button>

                        {/* Navigation arrows */}
                        {hasPrevious && (
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
                            >
                                <i className="fas fa-chevron-left text-xl text-purple-600"></i>
                            </button>
                        )}
                        {hasNext && (
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
                            >
                                <i className="fas fa-chevron-right text-xl text-purple-600"></i>
                            </button>
                        )}

                        <div className="p-8">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />

                            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Résumé du projet</h3>
                                    <p className="text-gray-600 mb-6">{project.fullDescription}</p>

                                    <h3 className="text-xl font-semibold mb-4">Fonctionnalités clés</h3>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <i className="fas fa-check text-purple-600 mr-3 mt-1"></i>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Détails techniques</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <span className="font-medium text-gray-800">Durée :</span>
                                            <span className="text-gray-600 ml-2">{project.duration}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-800">Rôle :</span>
                                            <span className="text-gray-600 ml-2">{project.role}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-800">Taille de l’équipe :</span>
                                            <span className="text-gray-600 ml-2">{project.teamSize}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 mt-8">Résultats et impact</h3>
                                    <ul className="space-y-2">
                                        {project.results.map((result, index) => (
                                            <li key={index} className="flex items-start">
                                                <i className="fas fa-chart-line text-green-600 mr-3 mt-1"></i>
                                                <span className="text-gray-600">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProjectDetail component error:', error);
        reportError(error);
    }
}

function Projects() {
    try {
        const [selectedProject, setSelectedProject] = React.useState(null);
        const [isModalOpen, setIsModalOpen] = React.useState(false);
        const [showAll, setShowAll] = React.useState(false);

        const projects = [
                {
        title: 'Traitement intelligent des demandes de fret',
        description: "Un assistant intelligent pour analyser les demandes clients par email et générer automatiquement des propositions tarifaires précises.",
        fullDescription:
            "Dans une agence de transport spécialisée en fret palettisé, les demandes clients arrivaient par email et devaient être traitées manuellement. Il fallait analyser le besoin (type de marchandise, nombre de palettes, lieu de départ et d’arrivée), calculer un tarif en fonction de nombreux paramètres (volume, distance, date), puis répondre au client. " +
            "J’ai conçu un système automatisé capable de lire les emails entrants, d’interpréter la demande, de calculer le prix en temps réel à partir des règles internes et des données actualisées, puis de générer une réponse complète prête à être envoyée par email. ",
        image: './images/Logiciel-de-Gestion-de-Transport2.jpg',
        tags: ['Logistique', 'Automatisation', 'Email', 'Pricing dynamique'],
        duration: '6 mois',
        role: 'Chef de projet IA',
        teamSize: '4 personnes',
        features: [
            'Lecture automatique des emails entrants',
            'Interprétation des demandes clients (lieux, volumes, produits)',
            'Calcul tarifaire dynamique connecté à la base logistique',
            'Génération automatique des réponses commerciales',
            'Interface de contrôle pour validation humaine si nécessaire'
        ],
        results: [
            'Gain de temps pour chaque demande traitée',
            'Réduction du taux d’erreur de 7 % à moins de 1 %',
            'Réponses envoyées en moins de 2 minutes en moyenne',
            'Amélioration notable de la satisfaction client'
        ],
        github: '#',
        demo: '#'
    },
                    {
        title: 'Tableau de bord automatisé de pilotage pour direction opérationnelle',
        description: "Centralisation et automatisation du reporting hebdomadaire pour une direction opérationnelle.",
        fullDescription:
            "Pour une entreprise multi-sites du secteur agroalimentaire, j’ai conçu un tableau de bord automatisé permettant de suivre les ventes, la performance des équipes, les écarts de production et les indicateurs de qualité. " +
            "Le système récupère automatiquement les données depuis plusieurs outils (fichiers Excel, ERP, CRM), les consolide, les traite et les affiche dans une interface claire et des tableaux de bord dynamiques. " +
            "Les managers reçoivent chaque lundi un rapport synthétique à jour, sans aucune action manuelle.",
        image: './images/1606812950-modele-tableau-bord.jpg',
        tags: ['Automatisation', 'Reporting', 'Tableau de bord', 'Business'],
        duration: '3 mois',
        role: 'Consultant IA / Data',
        teamSize: '2 personnes',
        features: [
            'Connexion automatique à plusieurs sources de données',
            'Nettoyage et structuration des données en temps réel',
            'Tableaux de bord interactifs actualisés chaque semaine',
            'Alertes en cas d’anomalie ou de dépassement de seuil',
            'Export PDF et envoi automatique par email'
        ],
        results: [
            '100 % des reportings produits sans intervention humaine',
            'Gain de temps pour chaque manager',
            'Suppression des erreurs de calcul manuelles',
            'Meilleure visibilité pour anticiper les actions terrain'
        ],
        github: '#',
        demo: '#'
    },
            {
    title: 'Génération automatique de devis à partir de synoptiques',
    description: "Un système intelligent pour transformer automatiquement des schémas techniques en devis complets.",
    fullDescription:
        "Pour une entreprise spécialisée dans l’installation de silos agricoles, j’ai mis en place un système d’analyse automatique des synoptiques fournis par les clients. " +
        "L’IA identifie les différents composants représentés sur le schéma, consulte la base tarifaire interne, et génère un devis complet sans intervention manuelle. " +
        "Ce processus a remplacé un travail répétitif et chronophage fait par des ingénieurs, tout en assurant une homogénéité et une fiabilité des estimations.",
    image: './images/Synoptique-2.png',
    tags: ['Agritech', 'Automatisation', 'Vision', 'Devis'],
    duration: '4 mois',
    role: 'Responsable projet IA',
    teamSize: '3 personnes',
    features: [
        'Analyse automatique des synoptiques clients',
        'Reconnaissance des composants installés',
        'Connexion à la base de prix de l’entreprise',
        'Génération de devis détaillés',
        'Interface de validation pour l’équipe commerciale'
    ],
    results: [
        'Suppression totale de la saisie manuelle des devis',
        'Temps de traitement amélioré',
        'Amélioration de la cohérence tarifaire',
        'Gain de temps pour les ingénieurs'
    ],
    github: '#',
    demo: '#'
},
{
    title: 'Avatar intelligent pour animation en direct',
    description: "Un avatar animé qui interagit en temps réel avec les spectateurs d’un live Twitch.",
    fullDescription:
        "J’ai conçu un avatar virtuel entièrement automatisé capable d’animer un live en réagissant aux messages du chat Twitch. " +
        "Connecté en temps réel, l’avatar lit les conversations, comprend les messages, et répond vocalement avec des mouvements synchronisés. " +
        "Ce système a été utilisé dans un contexte de streaming pour divertir et fidéliser l’audience, mais il peut aussi s’adapter à des cas d’usage en support client, formation ou événementiel digital.",
    image: './images/avatar.jpg',
    tags: ['Interaction', 'Streaming', 'Twitch', 'Avatar virtuel'],
    duration: '2 mois',
    role: 'Consultant IA / Data',
    teamSize: '2 personnes',
    features: [
        'Réception des messages en direct depuis Twitch',
        'Analyse et compréhension du langage utilisateur',
        'Génération de réponses adaptées avec synthèse vocale',
        'Animation temps réel via un avatar 3D connecté',
        'Expérience immersive continue sans intervention humaine'
    ],
    results: [
        'Création d’un canal Twitch animé 24/7 sans animateur humain',
        'Taux d’engagement du chat amélioré',
        'Retour très positif des spectateurs sur l’expérience',
        'Exploration de nouvelles formes d’interaction client automatisée'
    ],
    github: '#',
    demo: '#'
},
{
    title: 'Automatisation des fiches clients pour agence immobilière',
    description: "Un système d'écoute intelligent des entretiens entre commerciaux et client qui transforme les échanges en données exploitables sans saisie manuelle.",
    fullDescription:
        "Dans une grande agence immobilière, les conseillers devaient remplir à la main un formulaire structuré après chaque appel ou rendez-vous : critères de recherche, budget, localisation, type de bien, nombre de chambres, etc. " +
        "J’ai conçu un système capable d’enregistrer les échanges vocaux avec les clients, d’en extraire automatiquement les informations clés, puis de remplir le formulaire client en quelques secondes. " +
        "Ce dispositif a permis d’améliorer considérablement la qualité des données CRM tout en libérant les équipes commerciales d’une tâche chronophage et répétitive.",
    image: './images/agence immo.jpeg',
    tags: ['Immobilier', 'Automatisation', 'CRM', 'Reconnaissance vocale'],
    duration: '5 mois',
    role: 'Consultant IA / Data',
    teamSize: '3 personnes',
    features: [
        'Enregistrement automatique des échanges client (téléphone & RDV)',
        'Extraction des critères de recherche immobiliers',
        'Remplissage intelligent d’un formulaire CRM de 40+ champs',
        'Interface de contrôle pour relecture rapide',
        'Historisation et archivage sécurisé des conversations'
    ],
    results: [
        '90 % de réduction du temps de saisie après rendez-vous',
        'Formulaires plus complets et plus précis',
        'Adoption massive par les équipes dès le 1er mois',
        'Amélioration de la pertinence des relances commerciales'
    ],
    github: '#',
    demo: '#'
},
{
    title: 'Segmentation intelligente des clients pour marketing ciblé',
    description: "Identification automatique des profils clients pour adapter les campagnes marketing à chaque type de client.",
    fullDescription:
        "Pour une entreprise e-commerce, j’ai mis en place un système qui analyse les comportements d’achat afin de regrouper les clients par profils : fidèles, occasionnels, sensibles au prix, etc. " +
        "Cette segmentation a permis de personnaliser les campagnes marketing, d'identifier les clients clé et d’envoyer les bons messages aux bonnes personnes. Résultat : plus de conversions, moins d’emails inutiles, et une meilleure image de marque.",
    image: './images/une_segmentation_des_clients_efficace.jpg',
    tags: ['Marketing', 'Segmentation', 'E-commerce', 'Personnalisation'],
    duration: '3 mois',
    role: 'Consultant Data',
    teamSize: '2 personnes',
    features: [
        'Analyse automatique des historiques d’achat',
        'Détection des groupes de clients aux comportements similaires',
        'Création de segments marketing dynamiques',
        'Tableau de bord pour suivre l’évolution des profils',
        'Connexion à la plateforme d’envoi d’emails'
    ],
    results: [
        'Taux d’ouverture des emails en hausse de 40 %',
        'Campagnes mieux ciblées = 2× plus de conversions',
        'Réduction du taux de désabonnement',
        'Économie de 20 % sur les budgets d’envoi marketing'
    ],
    github: '#',
    demo: '#'
}


        
            // Tu peux en ajouter d'autres ici
        ];

        const visibleProjects = showAll ? projects : projects.slice(0, 3);

        const openProjectDetail = (project) => {
            setSelectedProject(project);
            setIsModalOpen(true);
        };

        const closeProjectDetail = () => {
            setIsModalOpen(false);
            setSelectedProject(null);
        };

        return (
            <section data-name="projects" data-file="components/Projects.js" id="projects" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Projets récents</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover fade-in cursor-pointer"
                                onClick={() => openProjectDetail(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-purple-600 font-medium">Voir le détail</span>
                                        <i className="fas fa-arrow-right text-purple-600"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-purple-600 font-semibold hover:underline flex items-center justify-center gap-2"
                        >
                            {showAll ? 'Voir moins de projets' : 'Voir plus de projets'}
                            <i className={`fas fa-chevron-${showAll ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                </div>

                <ProjectDetail
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeProjectDetail}
                    projects={projects} // 🆕 nouveau
                    setProject={setSelectedProject} // 🆕 nouveau
                />

            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}

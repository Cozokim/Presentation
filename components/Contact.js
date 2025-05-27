function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            alert("Merci pour votre message ! Je vous répondrai très bientôt.");
            setFormData({ name: '', email: '', message: '' });
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section data-name="contact" data-file="components/Contact.js" id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Me contacter</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="fade-in">
                            <h3 className="text-2xl font-semibold mb-6">Discutons ensemble</h3>
                            <p className="text-gray-600 mb-8">
                                Vous avez un besoin, une idée, ou simplement l’envie d’explorer comment l’automatisation et l’IA peuvent faire avancer votre activité ?<br />
<br />
                                Je propose des appels gratuits pour comprendre vos enjeux et voir si je peux vous accompagner avec une solution adaptée.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-purple-600 mr-4"></i>
                                    <span>rigot.julien29@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-purple-600 mr-4"></i>
                                    <span>+33 6 17 54 88 02</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-purple-600 mr-4"></i>
                                    <span>Quimper</span>
                                </div>
                            </div>
                        </div>

                        <div className="fade-in">
                            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4">Envoyer un message</h3>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Votre nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Votre email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Votre message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 resize-none"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="fade-in">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}

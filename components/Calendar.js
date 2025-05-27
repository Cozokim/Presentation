function Calendar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const openModal = () => {
        setIsOpen(true);
        setIsLoading(true); // reset le loading à chaque ouverture
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div data-name="calendar" data-file="components/Calendar.js" className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Réserver un appel</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                Choisissez un créneau pour discuter ensemble. Le rendez vous est gratuit et sans engagement.
            </p>

            <button
                onClick={openModal}
                className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
                Réserver un créneau
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-3xl p-4 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                        >
                            &times;
                        </button>

                        <h4 className="text-lg font-semibold mb-4 text-center">Choisissez un créneau</h4>

                        {/* Loader visible tant que l'iframe n'a pas chargé */}
                        {isLoading && (
                            <div className="flex justify-center items-center h-[600px]">
                                <div className="text-gray-500 text-sm animate-pulse">
                                    Chargement du calendrier...
                                </div>
                            </div>
                        )}

                        <div className={`${isLoading ? 'hidden' : 'block'} w-full h-[600px]`}>
                            <iframe
                                src="https://calendly.com/intartdouf"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                style={{ minWidth: '320px' }}
                                onLoad={() => setIsLoading(false)}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

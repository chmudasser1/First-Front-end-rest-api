import React from 'react'

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-3xl font-bold text-center">Welcome to Our Website</h1>
            </header>

            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-4">Your Journey Starts Here</h2>
                    <p className="text-gray-600 mb-8">Discover amazing content and connect with like-minded individuals.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Informative Cards Section */}
            <section className="py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                        <p className="text-gray-600">Description of feature 1. This is a brief overview of what this feature offers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                        <p className="text-gray-600">Description of feature 2. This is a brief overview of what this feature offers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                        <p className="text-gray-600">Description of feature 3. This is a brief overview of what this feature offers.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home

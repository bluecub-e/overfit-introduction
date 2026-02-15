import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, activeTab, setActiveTab }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} OVERFIT. All rights reserved.</p>
                    <p className="mt-2 text-slate-600">A Magic, Gear + War Project</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

import { useState } from 'react';

export function WelcomeCard() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        console.log('Welcome to your modern vanilla web project! Building aesthetic interfaces starts here.');
    };

    return (
        <div className="w-full max-w-7xl p-8 flex justify-center">
            <div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 max-w-2xl text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-slide-up"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    Welcome to Your New Project
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    This is a modern, responsive starter template with glassmorphism and smooth animations. Ready for building amazing web experiences.
                </p>
                <button
                    onClick={handleClick}
                    style={{ transform: isClicked ? 'scale(0.96)' : 'scale(1)' }}
                    className="bg-blue-500 hover:bg-blue-600 text-white border-none py-3.5 px-8 text-lg font-semibold rounded-xl cursor-pointer transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(59,130,246,0.4)] active:translate-y-0"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

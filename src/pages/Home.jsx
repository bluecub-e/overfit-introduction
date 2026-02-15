import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Home = ({ setActiveTab }) => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const bgImage = "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/upscale_00011_.webp"; // 메인 배경 이미지 URL

    return (
        <div className="relative min-h-[85vh] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/50">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            {/* Dark/Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />

            {/* Interactive Background Glow (Spotlight) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-100"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(56, 189, 248, 0.25) 0%, transparent 40%)`,
                }}
            />

            {/* Hero Section */}
            <section className="relative z-10 text-center space-y-10 py-12 md:py-20 text-white max-w-4xl px-6">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight sm:leading-[1.1] drop-shadow-2xl break-keep">
                        마법과 기술이<br />
                        <span className="text-brand-400">융합되는 시대</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-3xl text-slate-100 font-bold tracking-tight drop-shadow-md break-keep">
                        A.C. 78년, 5A 논문이 불러온 혁신과 갈등의 기록
                    </p>
                </div>

                <p className="text-sm sm:text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md break-keep">
                    에테르의 파동을 수식으로 제어하는 새로운 패러다임.<br />
                    거대 기업들의 소리 없는 전쟁이 지금 시작됩니다.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                    <button
                        onClick={() => setActiveTab('webtoon')}
                        className="group flex items-center justify-center gap-3 bg-brand-500 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-brand-600 shadow-2xl hover:shadow-brand-500/50 transition-all active:scale-95"
                    >
                        웹툰 시작하기
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => setActiveTab('worldview')}
                        className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all active:scale-95 shadow-xl"
                    >
                        세계관 탐독
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;

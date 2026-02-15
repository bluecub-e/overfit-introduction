import React from 'react';
import { History, Users, Book, Coins } from 'lucide-react';

const Worldview = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-16 py-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">세계관 설정</h2>
                <p className="text-slate-600">에테르와 기술이 공존하는 시대, A.C. 78년의 기록</p>
            </div>

            {/* Background */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <History className="text-brand-600" size={24} />
                    <h3 className="text-2xl font-bold text-slate-800">역사 배경 (Background)</h3>
                </div>
                <div className="grid gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-lg mb-2 text-slate-900">1차 황금기</h4>
                        <p className="text-slate-600 leading-relaxed">수 세기 전, 세상을 지탱하는 '에테르'와 이를 응용한 '마법'이 인간 문명 발전에 결정적인 기여를 했던 시기입니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-lg mb-2 text-slate-900">마법의 몰락기와 과학의 발전</h4>
                        <p className="text-slate-600 leading-relaxed">통제 불가능한 에테르의 위험성으로 인한 대혼란 이후, 마법은 쇠퇴하고 과학과 공학 기술이 그 자리를 대체하기 시작했습니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-brand-500">
                        <h4 className="font-bold text-lg mb-2 text-slate-900">현재 (A.C. 78년)</h4>
                        <p className="text-slate-600 leading-relaxed">현대적 기술로 에테르를 안전하게 제어하는 법을 터득하며 '마법과 기술의 혼용'이 시작되었습니다. 최근 발표된 혁신적 논문 '5A'는 기업 간의 치열한 경쟁에 불을 붙였습니다.</p>
                    </div>
                </div>
            </section>

            {/* Factions */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <Users className="text-brand-600" size={24} />
                    <h3 className="text-2xl font-bold text-slate-800">주요 세력 (Factions)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { name: "릴리상스 (Releassance)", role: "개척자", desc: "5A 논문을 최초로 적용한 스타트업 연구소. 현재는 초심을 잃었다는 비판을 받기도 합니다.", hasLogo: true, logoUrl: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Releassance.webp" },
                        { name: "하이시어 (Highseer)", role: "기회주의자", desc: "새로운 패러다임의 가능성을 보고 뛰어든 각종 서비스업 기반의 대기업입니다.", hasLogo: true, logoUrl: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Highseer.webp" },
                        { name: "호문쿨루스 (Homunculus)", role: "이단아 엘리트", desc: "릴리상스와 하이시어에서 이탈한 천재들이 모인 곳으로, 독특하지만 실력은 압도적입니다.", hasLogo: true, logoUrl: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Homunculus.webp" },
                        { name: "엔비전 (Envision)", role: "수혜자들", desc: "에테르 아카이브의 자회사로 전기/전자 제품 전문 기업입니다. 최근 수요 폭증으로 큰 이득을 보고 있습니다.", hasLogo: true, logoUrl: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/envision.webp" },
                        { name: "매크로스크롤 (Macroscroll)", role: "시스템의 거인", desc: "기존 마법 상용화와 SW 기술로 막대한 자본을 축적한 시스템의 거물입니다.", hasLogo: true, logoUrl: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Macroscroll.webp" },
                        { name: "ATRA", role: "정부 기관", desc: "경쟁 과열 방지를 위해 신설되었으나, 이미 거대 자본에 잠식되어 실효성이 미비합니다.", hasLogo: true, logoUrl: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/ATRA.webp" },
                        { name: "에테르 아카이브 (Aether Archive)", role: "조용한 사냥꾼", desc: "엔비전의 모회사로, 에너지 분야의 숨겨진 실세이자 강자입니다.", hasLogo: false },
                        { name: "프리랜서", role: "톱니바퀴", desc: "기업들의 책임 회피와 특수 목적을 위해 고용되는 전문 인력들입니다.", hasLogo: false },
                    ].map((f, i) => (
                        <div key={i} className="p-8 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                            {f.hasLogo && (
                                <div className="w-24 h-24 bg-white rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100">
                                    {f.logoUrl ? (
                                        <img src={f.logoUrl} alt={`${f.name} Logo`} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className="text-[10px] text-slate-300 font-bold uppercase">Logo</span>
                                    )}
                                </div>
                            )}
                            <div className="flex-grow">
                                <h4 className="font-extrabold text-xl text-brand-900 mb-1">{f.name}</h4>
                                <p className="text-sm font-semibold text-brand-500 mb-3">{f.role}</p>
                                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Terms */}
            <section className="space-y-8 text-slate-800">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <Book className="text-brand-600" size={24} />
                    <h3 className="text-2xl font-bold text-slate-800">주요 용어 (Terms)</h3>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                            에테르
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm md:text-base">
                            <li>세계를 지탱하는 에너지이자 플라즈마와 유사한 물리적 성질을 띔</li>
                            <li>특정 주파수(의지, 수식 등)에 반응하여 결정화되거나 에너지를 방출</li>
                            <li>장기간 노출 시 인체 조직이 결정화되는 악영향이 있음</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-xl mb-3">5A 논문</h4>
                        <p className="text-slate-600 text-sm md:text-base">
                            에테르 이용을 '직감'에서 '정확한 수치와 공식'의 영역으로 끌어올린 혁명적 연구입니다.
                            이로 인해 유기물 없이도 컴퓨터 연산을 통한 에테르 제어가 가능해졌으며, 마법 기술의 지수적 성장을 불러왔습니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Economy */}
            <section className="space-y-8">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <Coins className="text-brand-600" size={24} />
                    <h3 className="text-2xl font-bold text-slate-800">경제 체계 (Economy)</h3>
                </div>
                <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Coins size={120} />
                    </div>
                    <h4 className="text-white text-xl font-bold mb-6">화폐 단위: 크레딧 (C)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="space-y-1">
                            <span className="text-slate-500 text-xs block">환율 기준</span>
                            <span className="text-white font-mono text-lg font-bold">1C ≈ $0.01</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-slate-500 text-xs block">흰 식빵</span>
                            <span className="text-white font-mono text-lg font-bold">100 C</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-slate-500 text-xs block">정제 에테르 (1g)</span>
                            <span className="text-white font-mono text-lg font-bold">1,500 C</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-slate-500 text-xs block">월세 평균</span>
                            <span className="text-white font-mono text-lg font-bold">75,000 C</span>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-800">
                        <p className="text-sm text-slate-400 italic">암묵적 최저 시급: 약 200 C (법정 기준 없음)</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Worldview;

import { useEffect, useState } from "react"
import { Heart, Sparkles } from "lucide-react"
import foto1 from './assets/foto1.jpeg'
import foto2 from './assets/foto2.jpeg'
import foto3 from './assets/foto3.jpeg'
import foto4 from './assets/foto4.jpeg'
import foto5 from './assets/foto5.jpeg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

export const Page = () => {
    const [showHearts, setShowHearts] = useState(false)
    const [visibleReasons, setVisibleReasons] = useState<number[]>([])
    const [ showReasons, setShowReasons ] = useState(false)


    const reasons = [
        "Seu sorriso ilumina meus dias mais tristes",
        "Você me apoia em todos os meus sonhos",
        "Você é minha melhor amiga e confidente",
        "Você faz a vida ter sentido e propósito",
        "Sua risada é a música mais linda que já ouvi",
        "Você me faz querer ser uma pessoa melhor",
        "Seu carinho cura qualquer ferida da alma",
        "Sua força me inspira todos os dias",
        "Você é minha paz em meio ao caos",
        "Você é o amor da minha vida",
    ]

    const scrollToReasons = () => {
        setShowReasons(true)
        setShowHearts(true)
        reasons.forEach((_, index) => {
            setTimeout(() => {
            setVisibleReasons((prev) => [...prev, index])
            }, index * 300)
        })
    }

    useEffect(() => {
        if (showReasons) {
            const element = document.getElementById("reasons-section")
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [showReasons])

    useEffect(() => {
        if (showHearts) {
        const interval = setInterval(() => {
            createFloatingHeart()
        }, 1000)

        return () => clearInterval(interval)
        }
    }, [showHearts])

    const createFloatingHeart = () => {
        const heart = document.createElement("div")
        heart.innerHTML = "❤️"
        heart.className = "fixed text-2xl pointer-events-none z-10 animate-bounce"
        heart.style.left = Math.random() * window.innerWidth + "px"
        heart.style.bottom = "-50px"
        heart.style.animation = "float-up 4s ease-out forwards"

        document.body.appendChild(heart)

        setTimeout(() => {
        heart.remove()
        }, 4000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-50 to-red-100">
            <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-red-200/20 animate-pulse"></div>

                <div className="relative z-10 max-w-md mx-auto">
                    <div className="mb-8">
                    <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 pulse-heart" />
                    <Sparkles className="w-8 h-8 text-yellow-500 absolute top-4 right-4 animate-spin" />
                    <Sparkles className="w-6 h-6 text-pink-500 absolute top-12 left-8 animate-pulse" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
                    Para o Amor da Minha Vida
                    </h1>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 mb-8">
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        Meu coração transborda de amor por você. Cada dia ao seu lado é um presente que eu agradeço
                        infinitamente.
                    </p>
                    <p className="text-xl font-semibold text-red-600">
                        Com todo meu amor,
                        <br />
                        <span className="text-2xl">Wellington ❤️</span>
                    </p>
                    </div>

                    <button
                    onClick={scrollToReasons}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                    <Heart className="w-5 h-5" />
                    Clique para ver por que eu te amo
                    <Heart className="w-5 h-5" />
                    </button>
                </div>
            </section>

            <div className={showReasons ? "" : "hidden"}>
                {/* Seção dos Motivos */}
                <section id="reasons-section" className="py-16 px-4">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
                        Por que eu te amo tanto...
                        </h2>

                        <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div
                            key={index}
                            className={`transform transition-all duration-700 ${
                                visibleReasons.includes(index) ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                            }`}
                            >
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 border-red-400 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                <p className="text-lg text-gray-700 leading-relaxed">{reason}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* Seção de Fotos com Slider */}
                <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-rose-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">Nossos Momentos Especiais</h2>

                        <Slider
                            infinite={true}
                            speed={500}
                            slidesToShow={2}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={3000}
                            responsive={[
                                {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                                },
                            ]}
                        >
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-square bg-gradient-to-br from-pink-200 to-red-200 rounded-xl flex items-center justify-center">
                                <img src={foto1} alt="" className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <p className="text-center mt-4 text-gray-700 font-medium">Nosso primeiro encontro</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl flex items-center justify-center">
                                <img src={foto2} alt="" className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <p className="text-center mt-4 text-gray-700 font-medium">Momento mais feliz</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl flex items-center justify-center">
                                <img src={foto3} alt="" className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <p className="text-center mt-4 text-gray-700 font-medium">Momento mais feliz</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl flex items-center justify-center">
                                <img src={foto4} alt="" className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <p className="text-center mt-4 text-gray-700 font-medium">Momento mais feliz</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl flex items-center justify-center">
                                <img src={foto5} alt="" className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <p className="text-center mt-4 text-gray-700 font-medium">Momento mais feliz</p>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </section>

                {/* Carta de Amor */}
                <section className="py-16 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-pink-200">
                        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Uma Carta do Meu Coração</h2>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p className="text-xl italic text-center text-red-500 mb-8">"Minha querida esposa..."</p>

                            <p>
                                Não existem palavras suficientes para expressar o quanto você significa para mim. Desde o dia em que
                                nos conhecemos, minha vida ganhou cores que eu nem sabia que existiam.
                            </p>

                            <p>
                                Você é minha força quando me sinto fraco, minha luz quando tudo parece escuro, e minha alegria em cada
                                momento que compartilhamos juntos. Seu amor me transformou em uma pessoa melhor, mais completa, mais
                                feliz.
                            </p>

                            <p>
                                Cada manhã que acordo ao seu lado é uma bênção. Cada sorriso seu é um presente que guardo no coração.
                                Cada abraço seu é um lar onde sempre quero estar.
                            </p>

                            <p>
                                Obrigado por ser minha companheira, minha melhor amiga, minha inspiração e o grande amor da minha
                                vida. Prometo amar você hoje, amanhã e para sempre.
                            </p>

                            <div className="text-center mt-8 pt-6 border-t border-pink-200">
                                <p className="text-xl font-semibold text-red-600">Com todo meu amor e gratidão,</p>
                                <p className="text-2xl font-bold text-red-700 mt-2">Wellington 💕</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-gradient-to-r from-red-300 to-pink-300 text-white py-12 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <Heart className="w-12 h-12 mx-auto mb-6 pulse-heart" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Te amo para sempre ❤️</h3>
                        <p className="text-xl mb-4">Feliz Dia dos Namorados!</p>
                        <p className="text-lg opacity-90">
                        {new Date().toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                        </p>

                        <div className="mt-8 flex justify-center gap-4">
                        <Heart className="w-6 h-6 text-pink-200 animate-pulse" />
                        <Heart className="w-8 h-8 text-white pulse-heart" />
                        <Heart className="w-6 h-6 text-pink-200 animate-pulse" />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
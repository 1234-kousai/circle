"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Star, Users, MessageCircle } from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const leadRef = useRef<HTMLDivElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCompass, setShowCompass] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initial mount
    setIsLoaded(true)
    console.log('Component mounted, starting animation sequence')
    
    // Elegant sequence: Compass appears immediately, then text follows
    const compassTimer = setTimeout(() => {
      console.log('Setting showCompass to true')
      setShowCompass(true)
    }, 800) // Compass appears after brief delay

    const textTimer = setTimeout(() => {
      console.log('Setting showText to true')
      setShowText(true)
    }, 1200) // Text appears after compass animation completes

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (leadRef.current) observer.observe(leadRef.current)

    return () => {
      clearTimeout(compassTimer)
      clearTimeout(textTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full glass-nav z-50 shadow-lg transition-all duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center p-0 animate-float group-hover:animate-glow transition-all duration-300">
                  <Image
                    src="/circle.png"
                    alt="羅針盤"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <span className="text-lg sm:text-2xl font-bold gradient-text-orange-blue">羅針盤</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a href="#vision" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Vision
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors">
                  About Us
                </a>
                <a href="#join" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Join Us
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 py-4 border-t border-gray-100">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#vision" 
                    className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vision
                  </a>
                  <a 
                    href="#about" 
                    className="text-gray-700 hover:text-blue-500 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a 
                    href="#join" 
                    className="text-gray-700 hover:text-orange-500 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 animate-hero-bg particles">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-pink-50/30 to-blue-50/40"></div>
          
          <div className="container mx-auto px-6 flex flex-col justify-start items-center relative z-10 py-8 md:py-12 lg:py-16">
            {/* Central Floating Compass - Always present but animated */}
            <div className="mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12">
              <div className={`w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 relative transition-all duration-1000 ${showCompass ? 'animate-compass-entrance' : 'opacity-0'}`}>
                <Image
                  src="/direction.png"
                  alt="羅針盤"
                  width={224}
                  height={224}
                  className="w-full h-full object-contain animate-compass-float animate-compass-glow filter drop-shadow-2xl"
                />
                {/* Enhanced Sparkle effects */}
                {showCompass && (
                  <>
                    <div className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-sparkle opacity-80">✨</div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-400 animate-sparkle opacity-70" style={{animationDelay: '0.7s'}}>✨</div>
                    <div className="absolute top-1/2 -right-6 w-4 h-4 text-orange-400 animate-sparkle opacity-75" style={{animationDelay: '1.2s'}}>✨</div>
                    <div className="absolute -top-1 left-1/4 w-3 h-3 text-purple-400 animate-sparkle opacity-60" style={{animationDelay: '1.8s'}}>✨</div>
                  </>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-8 md:space-y-12 max-w-6xl mx-auto">
              
              {/* Main Content */}
              <div className="space-y-8 md:space-y-10 max-w-6xl mx-auto">
                <div className="text-center">
                  <p className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight ${showText ? 'animate-hero-text-entrance' : 'opacity-0'}`} style={{animationDelay: '0s'}}>
                      <span className="text-orange-500 drop-shadow-lg">大学という</span><span className="text-blue-600 mx-2 drop-shadow-lg">無限の可能性</span><span className="text-gray-800">を前に、</span><br className="md:hidden" />
                      <span className="text-purple-600 drop-shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">立ち止まっている君へ。</span>
                    </p>
                  </div>

                  <div className="text-center">
                    <p className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight ${showText ? 'animate-hero-text-entrance' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                      <span className="text-red-500 drop-shadow-lg">燻らせている</span><span className="text-blue-600 mx-2 drop-shadow-lg">その情熱</span><span className="text-gray-700">の、</span><br className="md:hidden" />
                      <span className="text-green-600 drop-shadow-lg">次なる舞台は</span><span className="text-orange-600 font-black drop-shadow-lg bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mx-1">ここにある。</span>
                    </p>
                  </div>

                  <div className="py-6 md:py-8 text-center">
                    <p className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight transform hover:scale-110 transition-transform duration-300 ${showText ? 'animate-pulse-glow' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
                      <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">未来を、デザインしよう。</span>
                    </p>
                  </div>

                  <div className="text-center">
                    <p className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight ${showText ? 'animate-hero-text-entrance' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
                      <span className="text-blue-600 drop-shadow-lg">東大キャリア支援団体</span><br className="lg:hidden" />
                      <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl mx-2 text-5xl md:text-6xl lg:text-7xl">『羅針盤』</span><br className="lg:hidden" />
                      <span className="text-orange-600 drop-shadow-lg">へようこそ。</span>
                    </p>
                  </div>

                  <div className="pt-10 md:pt-12 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                      <div className={`text-gray-900 mb-4 ${showText ? 'animate-hero-text-entrance' : 'opacity-0'}`} style={{animationDelay: '1.6s'}}>
                        <span className="text-gray-800">君の</span><span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mx-2">「好き」</span><span className="text-gray-800">を</span><span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mx-2">羅針盤</span><span className="text-gray-800">に、</span>
                      </div>
                      <div className={`text-gray-900 ${showText ? 'animate-hero-text-entrance' : 'opacity-0'}`} style={{animationDelay: '2s'}}>
                        <span className="text-gray-700">最高の仲間と共に、</span><br className="lg:hidden" />
                        <span className="text-blue-600 font-black drop-shadow-lg">心から熱中できる何か</span><span className="text-gray-700">を見つけよう。</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showText && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce fade-in-scale" style={{animationDelay: '10s'}}>
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </section>

        {/* Navigation Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 typewriter-advanced fade-in-scale gradient-text-orange-blue text-glow-effect">
                探索を始めよう
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto typewriter-sentence delay-1 font-medium leading-relaxed">
                羅針盤が指し示す、3つの扉から君の旅路を選ぼう
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="relative flex items-center justify-center min-h-[700px]">
                  {/* Central Compass */}
                  <div className="w-40 h-40 xl:w-48 xl:h-48 relative animate-compass-float group z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                    <Image
                      src="/circle.png"
                      alt="羅針盤"
                      width={192}
                      height={192}
                      className="w-full h-full object-contain animate-compass-glow transition-all duration-500 group-hover:scale-110 relative z-10"
                    />
                  </div>

                  {/* Navigation Cards with Better Spacing */}
                  {/* Vision - Top */}
                  <a href="#vision" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 group-nav">
                    <div className="navigation-card bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl w-56 shadow-2xl border border-orange-300/50">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <span className="text-xl">🎯</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Vision</h3>
                      <p className="text-orange-100 text-xs leading-relaxed">我々の目指す未来とビジョンを知る</p>
                      <div className="mt-3 text-xs text-orange-200">目標への道筋 →</div>
                    </div>
                  </a>
                  
                  {/* About Us - Bottom Left */}
                  <a href="#about" className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-8 group-nav">
                    <div className="navigation-card bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl w-56 shadow-2xl border border-blue-300/50">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <span className="text-xl">🧭</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">About Us</h3>
                      <p className="text-blue-100 text-xs leading-relaxed">羅針盤とは何かを詳しく知る</p>
                      <div className="mt-3 text-xs text-blue-200">私たちの物語 →</div>
                    </div>
                  </a>
                  
                  {/* Join Us - Bottom Right */}
                  <a href="#join" className="absolute bottom-0 right-1/3 transform translate-x-1/2 translate-y-8 group-nav">
                    <div className="navigation-card bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl w-56 shadow-2xl border border-purple-300/50">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <span className="text-xl">🚀</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Join Us</h3>
                      <p className="text-purple-100 text-xs leading-relaxed">挑戦者として仲間に加わる</p>
                      <div className="mt-3 text-xs text-purple-200">冒険を始める →</div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Tablet Layout */}
              <div className="hidden md:block lg:hidden">
                <div className="text-center mb-16">
                  <div className="w-40 h-40 mx-auto animate-compass-float group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                    <Image
                      src="/circle.png"
                      alt="羅針盤"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain animate-compass-glow transition-all duration-500 group-hover:scale-110 relative z-10"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <a href="#vision" className="group">
                    <div className="navigation-card bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl text-center shadow-xl">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">🎯</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Vision</h3>
                      <p className="text-orange-100 text-sm">我々の目指す未来とビジョンを知る</p>
                    </div>
                  </a>
                  
                  <a href="#about" className="group">
                    <div className="navigation-card bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl text-center shadow-xl">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">🧭</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">About Us</h3>
                      <p className="text-blue-100 text-sm">羅針盤とは何かを詳しく知る</p>
                    </div>
                  </a>
                  
                  <a href="#join" className="group">
                    <div className="navigation-card bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center shadow-xl">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">🚀</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Join Us</h3>
                      <p className="text-purple-100 text-sm">挑戦者として仲間に加わる</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="text-center mb-12">
                  <div className="w-32 h-32 mx-auto animate-compass-float group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                    <Image
                      src="/circle.png"
                      alt="羅針盤"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain animate-compass-glow transition-all duration-500 group-hover:scale-110 relative z-10"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <a href="#vision" className="block group">
                    <div className="navigation-card bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🎯</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">Vision</h3>
                          <p className="text-orange-100 text-sm">我々の目指す未来とビジョンを知る</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  
                  <a href="#about" className="block group">
                    <div className="navigation-card bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🧭</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">About Us</h3>
                          <p className="text-blue-100 text-sm">羅針盤とは何かを詳しく知る</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  
                  <a href="#join" className="block group">
                    <div className="navigation-card bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🚀</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">Join Us</h3>
                          <p className="text-purple-100 text-sm">挑戦者として仲間に加わる</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 particles relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-gray-900">Our </span><span className="gradient-text animate-text-gradient">Vision</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange-blue mb-12 animate-scale-pulse">
                  自らの意志で人生を選択し、自己実現を果たす
                </h3>
              </div>

              <div className="space-y-8 text-lg leading-relaxed">
                <p className="text-2xl font-bold text-gray-900 mb-8">我々の掲げる目標はただ一つ。</p>

                <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-lg border-l-4 border-orange-500">
                  <p className="text-xl font-semibold text-gray-900">
                    「メンバー全員が、自らの意志で人生を選択し、自己実現を果たすこと」
                  </p>
                </div>

                <p className="text-gray-700">
                  「<span className="text-red-500 font-semibold">好きなことを仕事にするのは夢物語だ</span>
                  」と誰かが言うかもしれない。
                </p>

                <p className="text-gray-700">
                  我々は、<span className="text-orange-500 font-semibold">本気の行動</span>
                  がその壁を打ち破ることを証明したい。
                </p>

                <div className="bg-blue-50 p-8 rounded-lg my-12">
                  <div className="space-y-4 text-gray-800">
                    <p className="font-semibold text-blue-600">自分の人生を、他人の価値観に委ねるな。</p>
                    <p>深く考え、情熱に従い、自らの手で未来を掴み取れ。</p>
                    <p>
                      そのための<span className="text-orange-500 font-semibold">知恵</span>と
                      <span className="text-blue-500 font-semibold">勇気</span>、そして
                      <span className="text-green-600 font-semibold">最高の仲間</span>を、羅針盤で手に入れよう。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 particles relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <span className="text-gray-900">About</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 rounded-full flex items-center justify-center p-0 flex-shrink-0 animate-float pulse-glow">
                    <Image
                      src="/circle.png"
                      alt="羅針盤"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <span className="gradient-text animate-text-gradient">"羅針盤"</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange-blue mb-8 animate-scale-pulse">挑戦者のためのコミュニティ</h3>
                <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <p className="text-xl font-semibold text-gray-900">
                    【全員が<span className="text-orange-500">自己実現</span>できる楽しい環境を】
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-lg leading-relaxed">
                <p className="text-2xl font-bold text-gray-900 mb-8">
                  我々「羅針盤」は、<span className="text-red-500">単なるサークルではない</span>。
                </p>

                <p className="text-gray-700">
                  メンバー一人ひとりが<span className="text-orange-500 font-semibold">人生の主役</span>となり、 「
                  <span className="text-blue-500 font-semibold">自己実現</span>」を追求する
                  <span className="text-green-600 font-semibold">挑戦者のためのコミュニティ</span>だ。
                </p>

                <p className="text-gray-700">
                  ここでは、多様な才能と野心を持つ仲間たちが、互いに刺激を与え、行動を加速させていく。
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                  <div>
                    <Image
                      src="/people.JPG"
                      alt="Community interaction"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <p className="text-gray-800">
                        「<span className="text-red-500 font-semibold">やりたいことがない</span>」と立ち止まっていた者が、
                        <span className="text-orange-500 font-semibold">誰よりも熱中できる何か</span>を見つける。
                      </p>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-gray-800 font-semibold text-center text-xl">
                        そんな<span className="text-blue-500">化学反応</span>が、日々生まれる場所だ。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join" className="py-20 animated-bg-subtle particles relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-gray-900">Join </span><span className="gradient-text animate-text-gradient">Us</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-orange-blue mb-12 animate-scale-pulse">新たな挑戦者へ</h3>
              </div>

              <div className="space-y-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">こんな君を待っている</h4>

                <div className="grid md:grid-cols-3 gap-8 stagger">
                  <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced transform-3d group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      <span className="gradient-text-orange-blue">受験勉強の次</span>に打ち込むべき「何か」を探している君へ
                    </h5>
                  </div>

                  <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced transform-3d group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500" style={{animationDelay: '1s'}}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      <span className="gradient-text-orange-blue">行動力ある仲間</span>が集う環境に、身を投じたい君へ
                    </h5>
                  </div>

                  <div className="card-enhanced text-center p-8 rounded-xl hover-lift-enhanced transform-3d group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:animate-glow transition-all duration-500" style={{animationDelay: '2s'}}>
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      まだ見ぬ<span className="gradient-text-orange-blue">自分の可能性</span>を、信じてみたい君へ
                    </h5>
                  </div>
                </div>

                <div className="bg-white p-12 rounded-lg shadow-sm border-l-4 border-orange-500 text-center">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    やりたいことがまだ決まっていなくても、サークル選びに迷っていても、心配はいらない。
                  </p>
                  <p className="text-2xl font-bold text-orange-600 mb-6">
                    その<span className="text-blue-600">燻る想い</span>こそ、最高の燃料だ。
                  </p>
                  <p className="text-xl text-gray-700 mb-8">羅針盤は、そんな君を心から歓迎する。</p>

                  <div className="glass-dark text-white p-8 rounded-xl animate-gradient particles relative overflow-hidden">
                    <div className="relative z-10">
                      <h4 className="text-3xl font-bold mb-6">
                        君の航路を指し示す<span className="gradient-text animate-text-gradient">羅針盤</span>は、ここにある。
                      </h4>
                      <p className="text-xl mb-8 text-gray-200 animate-scale-pulse">さあ、我々と共に、まだ見ぬ世界へ冒険の帆を張ろう。</p>

                      <Button
                        asChild
                        size="lg"
                        className="btn-enhanced text-white px-10 py-6 text-lg font-semibold shadow-2xl"
                      >
                        <a href="https://www.instagram.com/rashinbantodai?igsh=ZW02cHQzaWgxaGpn" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          相談してみる
                        </a>
                      </Button>

                      <div className="mt-8 text-sm text-gray-300">
                        <p>質問や相談があれば、いつでも気軽にお声がけください。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sword } from "lucide-react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 800);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Escape" || e.key === "Enter" || e.key === " ") && !isExiting) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVisible, isExiting, handleClose]);

  const members = ["Haikal J", "Hasna", "Dewa", "Pingki", "Nabilla", "Kaysan"];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="intro-title"
          aria-describedby="intro-description"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-900 to-black"
            animate={isExiting ? { scale: 1.2, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={isExiting ? { opacity: 0 } : { opacity: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </motion.div>

          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={isExiting ? {
                y: -100,
                opacity: 0,
                scale: 0,
              } : {
                y: [null, -20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={isExiting ? {
                duration: 0.5,
                delay: Math.random() * 0.3,
              } : {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}

          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto"
            animate={isExiting ? { 
              y: -50, 
              opacity: 0,
              scale: 0.9,
            } : { 
              y: 0, 
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isExiting ? { opacity: 0, scale: 0, rotate: 180 } : { opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: isExiting ? 0 : 0.2 }}
              className="mb-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-600/20 flex items-center justify-center border-2 border-amber-500/50">
                <Sword className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: isExiting ? 0.05 : 0.3 }}
              className="text-amber-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium"
            >
              Selamat Datang
            </motion.p>

            <motion.h1
              id="intro-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isExiting ? 0.1 : 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Website ini dibuat oleh
              <br />
              <span className="text-amber-400">Kelompok 1</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isExiting ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: isExiting ? 0 : 0.6 }}
              className="w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8"
            />

            <motion.div
              id="intro-description"
              initial={{ opacity: 0 }}
              animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: isExiting ? 0.15 : 0.7 }}
              className="mb-10"
            >
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {members.map((name, index) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isExiting ? { 
                      opacity: 0, 
                      scale: 0.5, 
                      y: -30,
                    } : { 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                    }}
                    transition={{ 
                      duration: 0.4, 
                      delay: isExiting ? index * 0.05 : 0.8 + index * 0.1 
                    }}
                    className="px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.button
              onClick={handleClose}
              disabled={isExiting}
              initial={{ opacity: 0, y: 20 }}
              animate={isExiting ? { 
                opacity: 0, 
                scale: 1.5, 
                y: 0,
              } : { 
                opacity: 1, 
                y: 0,
                scale: 1,
              }}
              transition={{ duration: 0.5, delay: isExiting ? 0 : 1.3 }}
              whileHover={!isExiting ? { scale: 1.05 } : {}}
              whileTap={!isExiting ? { scale: 0.95 } : {}}
              className="group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-amber-500/25 transition-all focus:outline-none focus:ring-4 focus:ring-amber-500/50 disabled:cursor-not-allowed"
              autoFocus
            >
              Masuk ke Website
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={isExiting ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24 fill-black/30">
              <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

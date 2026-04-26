import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Moon, Sun } from 'lucide-react';

const DATA = {
  midtermActivities: [
    { id: "Act 1", title: "Intro to Java", desc: "Foundational Java syntax and setup.", code: "// Java Fundamentals" },
    { id: "Act 2", title: "Operators", desc: "Arithmetic and logical operations.", code: "int x = 10 + 5;" },
    { id: "Act 3", title: "Student Age Analyzer", desc: "Conditional logic classification.", code: "if(age > 18) { ... }" },
    { id: "Act 5", title: "Personal Budget Tracker", desc: "Tracking expenses with Java logic.", code: "double budget = 5000.00;" }
  ],
  seatworks: [
    { id: "SW 1", title: "Java Increment", desc: "Prefix/Postfix mechanics.", code: "x++; ++x;" },
    { id: "SW 2", title: "Scholarship Evaluator", desc: "Multi-conditional grading.", code: "if(gpa >= 1.0) { ... }" }
  ],
  quizzes: [
    { id: "Quiz 1", title: "Fundamentals Reflection", desc: "I am satisfied with my score on this quiz. It reinforced key concepts essential for deeper learning.", code: "// Reflection Module" },
    { id: "Quiz 2", title: "Syntax & OOP Reflection", desc: "A tough but rewarding challenge that served as a solid validation of my progress.", code: "// Reflection Module" }
  ]
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState('midtermActivities');
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            className="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="splash__text"
            >
              All roads lead to me
            </motion.h1>
            <div className="splash__bar" />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="nav">
        <div className="nav__logo font-serif">ren's <span>oop</span></div>
        <div className="nav__actions">
          <button onClick={() => setDark(!dark)} className="nav__icon-btn">
            {dark ? <Sun size={14}/> : <Moon size={14}/>}
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__sky" />
        <div className="hero__inner">
          <div className="hero__left">
            <h1 className="hero__title italic font-serif">ren's <br/> <em>oop portfolio</em></h1>
            <p className="hero__desc">BSIT 2-2N · Midterms Milestone</p>
          </div>
          <div className="hero__right">
            <div className="terminal">
              <div className="terminal__bar"><div className="terminal__title">Midterms.java</div></div>
              <div className="terminal__body font-mono text-xs text-[#A8C93A]">
                <p>&gt; java Midterms.java</p>
                <p className="text-white/40">Compiling academic records...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work">
        <div className="section__inner">
          <div className="work-layout">
            <aside className="folder-nav">
              {Object.keys(DATA).map(key => (
                <button 
                  key={key}
                  className={`folder-nav__btn ${category === key ? 'folder-nav__btn--active' : ''}`}
                  onClick={() => setCategory(key)}
                >
                  <Folder size={14} /> {key.replace(/([A-Z])/g, ' $1')}
                </button>
              ))}
            </aside>

            <div className="work-content">
              {DATA[category].map((item) => (
                <div key={item.id} className="accordion-card">
                  <button 
                    className="accordion-card__trigger"
                    onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                  >
                    <div className="accordion-card__left">
                      <span className="accordion-card__label">{item.id}</span>
                      <h4 className="accordion-card__title">{item.title}</h4>
                      <p className="text-xs opacity-50">{item.desc}</p>
                    </div>
                  </button>
                  {openItem === item.id && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="p-4 bg-black rounded-xl">
                      <pre className="text-[#A8C93A] font-mono text-xs">{item.code}</pre>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer italic font-serif">
        <h2 className="footer__text">all roads lead to me</h2>
      </footer>
    </div>
  );
}
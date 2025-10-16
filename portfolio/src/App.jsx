import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { FiSun, FiMoon } from 'react-icons/fi'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') ?? 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

function Navbar() {
  const { theme, toggle } = useTheme()
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b1220]/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="font-semibold tracking-wide">Pradeep N</a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {item.label}
              </a>
            ))}
            <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
          <button aria-label="Toggle theme" onClick={toggle} className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </div>
  )
}

function Section({ id, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {children}
    </section>
  )
}

function Hero() {
  return (
    <Section id="home">
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
          <p className="text-sm uppercase tracking-widest text-primary-600">Full Stack Developer</p>
          <h1 className="text-4xl md:text-5xl font-bold">Pradeep N</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Building user-friendly, secure, and scalable web applications.</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#" className="btn btn-primary">View Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a href="https://linkedin.com/in/pradeep-natarajan-n-5461aa2a6" target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              <AiFillLinkedin className="text-2xl" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:pradeepnatarajan400@gmail.com" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              <AiOutlineMail className="text-2xl" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="aspect-square rounded-2xl glass flex items-center justify-center">
          <div className="text-center p-10">
            <div className="text-6xl">👨‍💻</div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Your photo here</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-video rounded-2xl glass" />
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I’m Pradeep N, an aspiring Full Stack Developer with hands-on experience in web development,
            database management, and software integration. I’m passionate about building efficient, user-friendly,
            and secure applications. Currently pursuing MCA at SNS College of Technology, Coimbatore.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}

function Skills() {
  const groups = [
    { title: 'Frontend Development', items: ['Figma'] },
    { title: 'Databases', items: ['MySQL'] },
    { title: 'Programming Languages', items: ['Java', 'SQL', 'PHP'] },
    { title: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy'] },
    { title: 'Cybersecurity', items: ['OWASP Top 10', 'SQL Injection Prevention', 'Cryptography Basics'] },
    { title: 'Version Control & Tools', items: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Android Studio'] },
    { title: 'Other Tools', items: ['Adobe Lightroom'] },
  ]
  return (
    <Section id="skills">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-5 rounded-xl glass">
            <h3 className="font-medium mb-3 text-gray-800 dark:text-gray-100">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-700 dark:bg-white/5 dark:text-primary-300 border border-primary-100 dark:border-white/10 hover:-translate-y-0.5 transition-transform">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Work Experience</h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative mb-8">
          <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary-500 shadow-glow" />
          <div className="p-5 rounded-xl glass">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="font-medium">Assembly Line Operator — Lenovo, Puducherry</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Operated and maintained assembly line machinery.</li>
              <li>Ensured all parts were assembled according to specifications and upheld quality standards.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Education() {
  const items = [
    {
      title: 'Master of Computer Application (Pursuing) — SNS College of Technology, Coimbatore',
    },
    {
      title: 'Bachelor of Computer Application | GPA 7.9 — Srimad Andavan Arts and Science College, Trichy',
    },
  ]
  return (
    <Section id="education">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Education</h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-5 rounded-xl glass">
            <p className="text-gray-800 dark:text-gray-100">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Certifications() {
  return (
    <Section id="certifications">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Certifications</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-5 rounded-xl glass hover:shadow-glow transition-shadow">
          <p className="font-medium">Python Programming – MSME</p>
        </motion.div>
      </div>
    </Section>
  )
}

function Strengths() {
  const items = [
    'Team-Oriented',
    'Quick Learner',
    'Strong Analytical & Problem-Solving Skills',
    'Area of Interest: Web Development',
    'Languages: Tamil, English',
  ]
  return (
    <Section id="strengths">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Strengths</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <motion.div key={it} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-4 rounded-xl glass">
            <p className="text-gray-800 dark:text-gray-100">{it}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4 p-5 rounded-xl glass">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 ring-primary-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 ring-primary-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows="4" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 ring-primary-400" placeholder="Tell me about your project" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </motion.form>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-5 rounded-xl glass space-y-3">
          <a href="mailto:pradeepnatarajan400@gmail.com" className="inline-flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400">
            <AiOutlineMail className="text-xl" />
            pradeepnatarajan400@gmail.com
          </a>
          <a href="https://linkedin.com/in/pradeep-natarajan-n-5461aa2a6" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400">
            <AiFillLinkedin className="text-xl" />
            linkedin.com/in/pradeep-natarajan-n-5461aa2a6
          </a>
        </motion.div>
      </div>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-10">© 2025 Pradeep N</p>
    </Section>
  )
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Strengths />
      <Contact />
    </div>
  )
}

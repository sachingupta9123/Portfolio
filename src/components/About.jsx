import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Zap } from 'lucide-react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cards = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing clean and readable code using modern development practices',
    },
    {
      icon: Palette,
      title: 'Design Focused',
      description: 'Building responsive and user-friendly interfaces with modern UI design.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Creating optimized web applications focused on smooth user experience',
    },
  ]

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate about creating
            <br />
            <span className="text-orange-500">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {`I'm a Computer Science Engineering student and aspiring MERN stack 
              developer passionate about building modern, responsive, and user-friendly 
              web applications. I enjoy solving problems through code and continuously 
              improving my development skills through projects and hands-on learning.`}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {`My journey in tech started with curiosity about web development and has 
              grown into a passion for creating clean, scalable, and impactful digital 
              experiences. I'm constantly exploring new technologies and improving my 
              problem-solving abilities through DSA and real-world projects.`}
            </p>
            <div className="flex flex-wrap gap-3">
              {['HTML','CSS', 'Java Script' ,'React', 'Node.js' , 'MongoDB' , 'Java','DSA' , 'Bootstrap' , 'tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="p-6 gradient-border rounded-2xl hover:bg-orange-500/5 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                    <card.icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                    <p className="text-gray-400">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

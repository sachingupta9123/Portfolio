import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Users, Code } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    label: 'Hackathon Runner-Up',
    description:
      'Secured Runner-Up position in a hackathon through teamwork and innovative project development.',
  },

  {
    icon: Users,
    label: '5 Hackathons Participated',
    description:
      'Participated in multiple hackathons focused on problem-solving, teamwork, and web development.',
  },

  {
    icon: Code,
    label: 'Web Development Certifications',
    description:
      'Completed online certifications in React.js, JavaScript, MERN Stack, and modern web development.',
  },
]

function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm mb-4 block">
            Recognition
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements &{' '}
            <span className="text-orange-500">Learning</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-border p-6 rounded-2xl text-center group hover:bg-orange-500/5 transition-all"
            >
              <div className="inline-flex p-4 bg-orange-500/10 rounded-2xl mb-4 group-hover:bg-orange-500/20 transition-colors">
                <item.icon className="text-orange-500" size={28} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.label}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
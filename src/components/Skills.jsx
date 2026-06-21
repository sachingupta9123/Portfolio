import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'HTML', category: 'Frontend', width: '85%' },
  { name: 'CSS', category: 'Frontend', width: '75%' },
  { name: 'React', category: 'Frontend', width: '55%' },
  { name: 'JavaScript', category: 'Frontend', width: '55%' },
  { name: 'Tailwind CSS', category: 'Frontend', width: '55%' },

  { name: 'Node.js', category: 'Backend', width: '45%' },
  { name: 'Express.js', category: 'Backend', width: '35%' },
  { name: 'MongoDB', category: 'Backend', width: '30%' },

  { name: 'Java', category: 'Programming', width: '65%' },
  { name: 'DSA', category: 'Programming', width: '50%' },
  { name: 'C++', category: 'Programming', width: '30%' },

  { name: 'Git', category: 'Tools', width: '55%' },
  { name: 'Github', category: 'Tools', width: '50%' },
  { name: 'VS Code', category: 'Tools', width: '60%' },
  {name: 'IntelliJ', category: 'Tools' , width: '50%'},
]

const categories = ['Frontend', 'Backend', 'Programming', 'Tools']

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-orange-500">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="gradient-border p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-6">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: skill.width } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'REST APIs', 'GitHub', 'Frontend Development', 'Backend Basics', 'Problem Solving', 'UI Design', 'Web Development'].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

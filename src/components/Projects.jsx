import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  
  {
    title: 'ShopNest – MERN E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with the MERN stack,enabling users to browse products, view product details,manage their shopping cart, and experience a seamlessonline shopping experience through a responsive interface.',
    image: 'https://images.openai.com/static-rsc-4/VAE_cxWDYNLyQQZ3C6RlTd95mQdhjsyPi7PAa6p85xL8vlQQN0hRY52_7DczvhmN6F9YttCzA3xKgd_Pe3mRCfJsbvukGZ8naqcyC8KuLPtIpvWiJQnHaec1HUcxRgEVjDvzS150LipKJ-uO582q_dZBBsmSqhvXf4ZfWCkoUw4U_s3cleAZuhu2iXPkfv_f?purpose=fullsize',
    tech: ['React.js','Node.js','Express.js','MongoDB','Mongoose','Tailwind CSS','Cloudinary','Axios'],
    github: 'https://github.com',
    demo: 'https://shopnest-1-ulsa.onrender.com',
    featured: true,
  },
  {
    title: 'Wanderlust – Airbnb Clone',
    description: 'A full-stack accommodation listing platform inspired by Airbnb,where users can explore property listings, view detailedinformation, and interact with a responsive and user-friendlybooking platform.',
    image: 'https://images.openai.com/static-rsc-4/rlJyk9bz28_Xy_0U5FVEKU0x8_kJX8DV__qzn5TErQLbiRsJHmp-94L56ZmG3-yC4z0lHZRpga10DDF9w3z7xMDR0Mdvv12QJeit1t8DIxPjcPUzL4pIUkAALOs_jFnCo-oZPM7kQn3om_j_8V8lmqnTYtmen1LNpsylbVE-vn9aUQuF-gKH_tfuji969mvD?purpose=fullsize',
    tech: ['HTML','CSS','JavaScript','Node.js','Express.js','MongoDB','Mongoose','Bootstrap','Cloudinary'],
    github: 'https://github.com',
    demo: 'https://wanderlust-1-0vec.onrender.com',
    featured: true,
  },
  
]

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A selection of projects that showcase my expertise in building modern, scalable applications
          </p>

          <div className="flex justify-center gap-4">
            {['all', 'featured'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === f
                    ? 'bg-orange-500 text-black'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {f === 'all' ? 'All Projects' : 'Featured'}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="gradient-border rounded-2xl overflow-hidden bg-gray-900/50 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-orange-500/20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-full text-white hover:bg-orange-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/50 rounded-full text-white hover:bg-orange-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

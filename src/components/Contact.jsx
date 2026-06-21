import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sachin912325@gmail.com',
      href: 'mailto:sachin912325@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, India',
      href: '',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9123250531',
      href: 'tel:+919123250531',
    },
  ]

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm mb-4 block">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-orange-500">Connect</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear
            from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gradient-border p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Contact Information
          </h3>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="p-4 gradient-border rounded-xl group-hover:bg-orange-500/10 transition-colors">
                  <item.icon className="text-orange-500" size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-orange-500 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
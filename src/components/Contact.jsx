import { motion } from "motion/react";
import { useState } from "react";

function Contact() {
  const [contact] = useState({
    email: "arsalanalam152@gmail.com",
    phone: "+91 6203771141",
    github: "https://github.com/Sahil-Arsalan",
    linkedin: "https://www.linkedin.com/in/arsalan-alam152",
  });

  return (
    <section id="contact" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm open to discussing new opportunities, projects,
          and collaborations.
        </motion.p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {/* Email */}
          <motion.a
            href={`mailto:${contact.email}`}
            className="
              border border-gray-700
              rounded-xl
              p-6
              transition-all duration-300
              hover:border-blue-500
              hover:-translate-y-1
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="text-gray-400 mt-2">
              {contact.email}
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${contact.phone}`}
            className="
              border border-gray-700
              rounded-xl
              p-6
              transition-all duration-300
              hover:border-blue-500
              hover:-translate-y-1
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              Phone
            </h3>

            <p className="text-gray-400 mt-2">
              {contact.phone}
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-gray-700
              rounded-xl
              p-6
              transition-all duration-300
              hover:border-blue-500
              hover:-translate-y-1
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              GitHub
            </h3>

            <p className="text-gray-400 mt-2">
              View my projects
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-gray-700
              rounded-xl
              p-6
              transition-all duration-300
              hover:border-blue-500
              hover:-translate-y-1
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-2">
              Connect with me
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
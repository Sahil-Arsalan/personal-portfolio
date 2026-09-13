import { motion } from "motion/react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center">

        {/* Greeting */}
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
         className="text-4xl sm:text-5xl font-bold mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MD Arsalan Alam
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-xl mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Java Backend Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I build scalable and reliable backend applications using
          <br />
          Java, Spring Boot, REST APIs, JDBC, Oracle Database and PostgreSQL.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="bg-blue-500 rounded-[5px] px-5 py-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="/resume/Arsalan Alam Resume.pdf"
            download
            className="bg-blue-500 rounded-[5px] px-5 py-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold">
          About Me
        </h2>

        <p className="mt-6 text-lg leading-8">
          I'm a Java Backend Developer with around 2 years of industry-level
          hands-on experience building scalable and reliable backend
          applications. I have worked with Java, Spring Boot, REST APIs,
          Spring Security, JDBC, SQL, Oracle, and PostgreSQL, with experience
          in banking and payment solutions. I also build personal projects to
          strengthen my backend development skills and explore modern
          technologies.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
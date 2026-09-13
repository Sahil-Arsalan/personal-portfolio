import { motion } from "motion/react";
import { useState } from "react";

function Skills() {
  const [val] = useState({
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "React",
    ],
    Backend: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JDBC",
      "JPA",
    ],
    Database: [
      "SQL",
      "Oracle",
      "PostgreSQL",
    ],
    "Microservices & Cloud": [
      "Microservices",
      "Spring Cloud",
      "Eureka Service Registry",
      "Config Server",
      "Zipkin",
    ],
    "DevOps & Tools": [
      "Docker",
      "Git",
      "GitHub",
      "Maven",
    ],
  });

  return (
    <section id="skills" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

          {Object.entries(val).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              {/* Category */}
              <h3 className="text-2xl font-semibold mb-6">
                {category}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      border border-gray-600
                      rounded-full
                      px-4 py-2
                      text-sm
                      transition-all duration-300
                      hover:border-blue-500
                      hover:text-blue-400
                      hover:-translate-y-1
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
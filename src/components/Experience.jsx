import { motion } from "motion/react";
import { useState } from "react";

function Experience() {
  const [experiences] = useState([
    {
      role: "Java Developer",
      company: "Yalamanchili Cards and Payments",
      duration: "June 2024 - Present",

      responsibilities: [
        "Developed and maintained backend applications using Java and Spring Boot.",
        "Designed and implemented REST APIs for business requirements.",
        "Worked with Spring Security to implement secure backend services.",
        "Performed database operations using JDBC, SQL, Oracle, and PostgreSQL.",
        "Worked on banking and payment-related solutions.",
        "Debugged issues and implemented enhancements in existing services.",
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "JDBC",
        "Oracle",
        "PostgreSQL",
        "HTML & CSS",
        "JavaScript",
      ],
    },
  ]);

  return (
    <section id="experience" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              className="
                border border-gray-700
                rounded-xl
                p-8
                transition-all duration-300
                hover:border-blue-500
                hover:-translate-y-1
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >

              {/* Role & Company */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="text-lg text-blue-400 mt-1">
                    {experience.company}
                  </p>
                </div>

                <p className="text-gray-400 mt-3 md:mt-0">
                  {experience.duration}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">
                  Responsibilities
                </h4>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        border border-gray-600
                        rounded-full
                        px-4 py-2
                        text-sm
                        transition-all duration-300
                        hover:border-blue-500
                        hover:text-blue-400
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
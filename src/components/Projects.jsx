import { motion } from "motion/react";
import { useState } from "react";

function Projects() {
  const [projects] = useState({
    professional: [
      {
        title: "Superb Prepaid Card",
        description:
          "Backend payment application designed to securely process ONUS and NEFT fund transfers through bank API integrations.",
        contribution: [
          "Developed a scheduler to fetch pending transactions from the database and initiate NEFT transfers through bank APIs",
          "Developed fund transfer REST APIs to process ONUS transactions within the same bank",
          "Developed payment inquiry functionality to communicate with the bank and retrieve transaction status",
          "Implemented token-based authentication flow by integrating with the bank's token API before initiating payment and inquiry requests",
          "Implemented AES encryption and API key-based authentication for secure communication with bank APIs",
          "Implemented transaction validations, response handling, and transaction status updates",
          "Worked with database operations using JDBC and Oracle",
          "Troubleshot and resolved transaction processing and API integration issues",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "REST APIs",
          "JDBC",
          "Oracle",
          "AES Encryption",
          "API Key Authentication",
          "Scheduler",
          "NEFT",
        ],
      },

      {
        title: "CUB Credit Card",
        description:
          "Backend credit card service developed for CUB Bank to securely provide card information and transaction-related services through authenticated APIs.",
        contribution: [
          "Developed REST APIs for card details, transaction limits, transaction statements, transaction history, and CVV retrieval",
          "Implemented client authentication by validating Client ID, Client Secret, and Client Role",
          "Implemented JWT token generation with client identity, roles, and authorities as claims",
          "Implemented JWT validation and role-based authorization to control access to secured APIs",
          "Implemented two-way secure communication using encryption and digital signatures for client-server API requests and responses",
          "Verified client request signatures using the client's public key and decrypted requests using the application's private key",
          "Encrypted API responses using the client's public key and signed responses using the application's private key",
          "Worked with transaction history and card-related data stored in the backend database",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "REST APIs",
          "JDBC",
          "Oracle",
          "Public Key Encryption",
          "Digital Signature",
          "Role-Based Access Control",
        ],
      },

      {
        title: "IDBI Credit Card",
        description:
          "Secure backend credit card onboarding application integrated with Perfios and Wimbo for customer onboarding, verification, and customer communication.",
        contribution: [
          "Developed REST APIs for credit card onboarding, D-Dupe verification, and card creation",
          "Implemented token generation by validating Client ID, Client Secret, and Client Role and generating JWT tokens with client identity and role-based claims",
          "Implemented JWT authentication and role-based authorization by validating tokens and assigning authorities based on client roles",
          "Implemented secure request and response processing using public-key encryption and digital signatures",
          "Developed the D-Dupe API to check existing credit cards using the customer's PAN and return card details when an existing card is found",
          "Implemented card creation API to validate authorized requests and securely store customer onboarding details in the backend database",
          "Integrated the backend flow with CMS, which picks up stored customer details and initiates credit card creation",
          "Implemented Wimbo client integration to securely retrieve customer details through APIs and support email communication with customers",
          "Encrypted responses using the client's public key and signed responses using the application's private key",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "REST APIs",
          "JDBC",
          "Oracle",
          "Public Key Encryption",
          "Digital Signature",
          "Role-Based Access Control",
        ],
      },
    ],

    personal: [
      {
        title: "E-Commerce Microservices",
        description:
          "A microservices-based e-commerce application developed to explore distributed system architecture, service discovery, centralized configuration, inter-service communication, asynchronous messaging, distributed tracing, and containerization.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Cloud",
          "Microservices",
          "Eureka",
          "API Gateway",
          "Config Server",
          "OpenFeign",
          "Apache Kafka",
          "Zipkin",
          "Docker",
          "PostgreSQL",
        ],
        github:
          "https://github.com/Sahil-Arsalan/e-commerce-app/tree/dev",
      },

      {
        title: "Spring Security & OAuth2",
        description:
          "A Spring Boot application developed to explore authentication and authorization using Spring Security, JWT, and OAuth2.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "OAuth2",
          "REST APIs",
          "Role-Based Authorization",
        ],
        github:
          "https://github.com/Sahil-Arsalan/hospital-management-system",
      },
    ],
  });

  return (
    <section id="projects" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>

        {/* Professional Projects */}
        <motion.h3
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.professional.map((project, index) => (
            <motion.div
              key={project.title}
              className="
                border border-gray-700
                rounded-xl
                p-6
                transition-all duration-300
                hover:border-blue-500
                hover:-translate-y-2
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <h4 className="text-2xl font-semibold mb-4">
                {project.title}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Contribution */}
              <h5 className="font-semibold mb-3">
                My Contribution
              </h5>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                {project.contribution.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <h5 className="font-semibold mb-3">
                Technologies
              </h5>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      border border-gray-600
                      rounded-full
                      px-3 py-1
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
            </motion.div>
          ))}
        </div>

        {/* Personal Projects */}
        <motion.h3
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Personal Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.personal.map((project, index) => (
            <motion.div
              key={project.title}
              className="
                border border-gray-700
                rounded-xl
                p-6
                transition-all duration-300
                hover:border-blue-500
                hover:-translate-y-2
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <h4 className="text-2xl font-semibold mb-4">
                {project.title}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      border border-gray-600
                      rounded-full
                      px-3 py-1
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

              {/* GitHub */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  border border-gray-600
                  rounded-lg
                  px-4 py-2
                  transition-all duration-300
                  hover:bg-blue-500
                  hover:border-blue-500
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
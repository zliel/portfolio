"use client";

import { FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
} from "@/utils/motions";
import { PiTestTubeFill } from "react-icons/pi";
import { AiOutlineDocker } from "react-icons/ai";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold dark:text-white mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary dark:text-white/50 max-w-3xl mx-auto text-center">
          I&apos;m an endlessly curious Full Stack Developer with a passion for
          building tools that help improve people&apos;s productivity. My
          projects often combine my technical skills with my interest in
          language and education, and with my strong foundations in both
          frontend and backend development, I build streamlined websites and
          robust server-side applications.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16 dark:text-white"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>ReactJS / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>TailwindCSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>FastAPI</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AiOutlineDocker className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">CI/CD & DevOps</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Google Cloud Platform (GCP)</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <PiTestTubeFill className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Testing</h3>
            <ul className="text-secondary space-y-2">
              <li>Jest</li>
              <li>Selenium</li>
              <li>Pytest</li>
              <li>JUnit</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-16 dark:text-white"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Technical Support Services Student Assistant
            </h3>
            <p className="text-primary mb-2">
              California State University, Monterey Bay • 2023 - Present
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Assisted in the setup, configuration, and troubleshooting of
                campus systems using Manage Engine and Deep Freeze
              </li>
              <li>
                Provided technical support to students and staff, ensuring
                smooth operation of university systems
              </li>
              <li>
                Performed routine system maintenance, updates, and security
                checks
              </li>
              <li>
                Helped deploy and configure new hardware and software for
                various departments across campus
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="dark:text-white"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <h4 className="text-lg font-medium mb-1">
              Concentration: Software Engineering
            </h4>
            <p className="text-primary mb-2">
              California State University, Monterey Bay • 2023 - 2025
            </p>
            <p className="text-secondary">Cumulative GPA: 3.65</p>
            <p className="text-secondary">
              Coursework:{" "}
              <em>
                Software Engineering, Intro to Operating Systems, Data
                Structures & Algorithms, Intro to Databases, Intro to Computer
                Networks
              </em>
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

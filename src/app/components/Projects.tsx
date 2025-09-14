"use client";

import { projects } from "@/project_descriptions/projects";
import Image from "next/image";
import { ElementType } from "react";
import { FaGithub, FaNpm, FaRust } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motions";

const Projects = () => {
  const deployTypeIcons: Record<string, ElementType> = {
    npm: FaNpm,
    cargo: FaRust,
    website: FiExternalLink,
    api: FiExternalLink,
  };

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => {
            if (index >= 3) return null; // Limit to first 6 projects
            return (
              <motion.article
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.02 }}
                key={index}
                className="bg-white dark:bg-dark/50 dark:text-white rounded-lg shadow-md p-6"
                variants={fadeInUp}
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <motion.h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-centeer gap-2 text-secondary dark:text-gray-400  hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-6 h-6" />
                    <span>Source Code</span>
                  </motion.a>
                  {project.deployedLink && (
                    <motion.a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-centeer gap-2 text-secondary dark:text-gray-400  hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {(() => {
                        const Icon =
                          deployTypeIcons[project.deployType ?? "website"] ||
                          FiExternalLink;

                        return <Icon className="w-6 h-6" />;
                      })()}
                      <span>{project.deployedLinkText || "Live Demo"}</span>
                    </motion.a>
                  )}
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

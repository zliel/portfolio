"use client";

import { projects } from "@/project_descriptions/projects";
import Image from "next/image";
import { FaGithub, FaNpm, FaRust } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motions";
import { FiExternalLink } from "react-icons/fi";
import { ElementType, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const deployTypeIcons: Record<string, ElementType> = {
    npm: FaNpm,
    cargo: FaRust,
    website: FiExternalLink,
    api: FiExternalLink,
  };
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl dark:text-white font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-lg text-secondary mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="aspect-video bg-gray-200 dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                className="object-cover w-full h-full"
                width={500}
                height={500}
                onClick={() => setSelectedImage(project.coverImage)}
              />
            </motion.div>

            <div className="p-6">
              <motion.h3
                className="text-xl dark:text-white font-semibold mb-2"
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-secondary mb-4"
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
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary dark:text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>
                {project.deployedLink && (
                  <motion.a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-centeer gap-2 text-secondary dark:text-gray-400  hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
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
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{
                  // type: "spring",
                  // stiffness: 200,
                  duration: 0.15,
                  ease: "easeInOut",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Enlarged Project Image"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg max-w-[90vw] max-h-[80vh] object-contain"
                />
                <motion.button
                  className="absolute top-2 right-2 p-2 rounded-lg dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

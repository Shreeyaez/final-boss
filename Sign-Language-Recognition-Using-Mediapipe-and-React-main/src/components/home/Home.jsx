import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Video,
  Brain,
  Users,
  ShieldCheck,
  HeartHandshake,
  Globe,
  Star,
} from "lucide-react";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900">
              Bridging Voices with{" "}
              <span className="text-yellow-500">Sign Recognition</span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Real-time American Sign Language detection and translation —
              fostering inclusion and seamless communication across all voices.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-3 rounded-full font-medium shadow-lg transition">
                Try It Now
              </button>
              <button className="border border-blue-800 hover:bg-blue-50 text-blue-800 px-8 py-3 rounded-full font-medium transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="asl2.png"
              alt="ASL detection illustration"
              className="rounded-2xl shadow-lg w-full md:w-4/5"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        id="features"
        className="px-8 md:px-20 py-24 bg-white text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900"
        >
          Why Choose Sign Lab?
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our system combines intelligence, accessibility, and empathy —
          designed to make sign language translation simple, accurate, and
          inclusive.
        </p>

        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {[
            {
              icon: <Video className="text-yellow-500 w-10 h-10" />,
              title: "Real-Time Recognition",
              desc: "Instantly interpret gestures via live video using CNN and Mediapipe models.",
            },
            {
              icon: <Brain className="text-yellow-500 w-10 h-10" />,
              title: "Smart Adaptation",
              desc: "Our AI refines itself continuously, understanding gesture nuances better over time.",
            },
            {
              icon: <Users className="text-yellow-500 w-10 h-10" />,
              title: "Inclusive Design",
              desc: "Built to empower the Deaf and hearing communities alike — accessible to everyone.",
            },
            {
              icon: <ShieldCheck className="text-yellow-500 w-10 h-10" />,
              title: "Privacy First",
              desc: "No recordings or personal storage — your gestures remain yours, always.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 bg-blue-50 rounded-2xl hover:bg-yellow-50 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-24 px-8 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900"
        >
          How It Works
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Capture",
              desc: "Point your camera at your hands — our system begins recognizing signs instantly.",
            },
            {
              step: "2",
              title: "Translate",
              desc: "Our trained deep learning model converts gestures into text and speech in real-time.",
            },
            {
              step: "3",
              title: "Communicate",
              desc: "Your signs are displayed and spoken aloud — bridging understanding between communities.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-yellow-400"
            >
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who It Helps Section */}
      <section className="py-24 px-8 md:px-20 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900"
        >
          Who It Helps
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            {
              icon: <HeartHandshake className="text-yellow-500 w-10 h-10" />,
              title: "Deaf & Hard of Hearing Individuals",
              desc: "Experience effortless communication in workplaces, schools, and everyday life.",
            },
            {
              icon: <Globe className="text-yellow-500 w-10 h-10" />,
              title: "Teachers & Learners",
              desc: "Enhance learning experiences with real-time feedback and engaging lessons.",
            },
            {
              icon: <Star className="text-yellow-500 w-10 h-10" />,
              title: "Inclusive Organizations",
              desc: "Build environments where accessibility is standard — not an afterthought.",
            },
          ].map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 bg-blue-50 rounded-2xl hover:bg-yellow-50 shadow-sm transition"
            >
              <div className="flex justify-center mb-4">{group.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {group.title}
              </h3>
              <p className="text-gray-600 text-sm">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission / CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-24 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Our Mission
        </motion.h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-100">
          To make communication universal, inclusive, and compassionate through
          technology that listens, learns, and understands — regardless of
          language or ability.
        </p>
        <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-semibold shadow-lg transition">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-white to-pink-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Bridging Communication with{" "}
          <span className="text-pink-500">Sign Recognition</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl"
        >
          Experience the power of AI that understands and translates sign language
          into meaningful communication — empowering inclusion for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 mt-10"
        >
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg transition">
            Try Now <ArrowRight size={18} />
          </button>
          <button className="border border-pink-400 hover:bg-pink-100 text-pink-600 px-6 py-3 rounded-full font-medium transition">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-20 py-16 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Real-Time Detection",
            desc: "Instantly recognize gestures using webcam-based AI models powered by Mediapipe and deep learning.",
            icon: "🖐️",
          },
          {
            title: "Inclusive Design",
            desc: "Built to empower accessibility and make communication seamless for the deaf and hard-of-hearing community.",
            icon: "💬",
          },
          {
            title: "Continuous Learning",
            desc: "Our system improves with every use — adapting and refining gesture accuracy over time.",
            icon: "⚙️",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl p-8 flex flex-col items-center gap-4 transition"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          Join Us in Making Communication Universal 🌍
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Be a part of the movement that breaks communication barriers.
          Together, let’s make sign language accessible for all.
        </p>
        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sign Language Recognition | Built with 💖 by Shreeya Nepal
      </footer>
    </div>
  );
};

export default Home;

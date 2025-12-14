import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";


export default function Home() {
  return (
    <main className="bg-background text-text-primary">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <motion.div
          variants={fadeUp as any}
          viewport={{ once: true }}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-center"
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 font-bold">
            Celebrate Culture.
            <br className="hidden sm:block" />
            <span className="text-primary">Experience Traditions.</span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover cultural events, festivals, and traditions happening around you — curated with care and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Explore Events
            </Link>
            <Link
              to="/register"
              className="inline-block bg-surface text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Events */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl mb-4 font-bold">
            Upcoming Cultural Events
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Explore handpicked events from diverse cultures
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Traditional Festival",
              desc: "Heritage, food & rituals",
              color: "from-blue-400 to-cyan-300",
            },
            {
              title: "Music & Dance Night",
              desc: "Celebrate with live performances",
              color: "from-purple-400 to-pink-300",
            },
            {
              title: "Art Exhibition",
              desc: "Contemporary & classical art",
              color: "from-orange-400 to-red-300",
            },
          ].map((event, i) => (
            <motion.div
              key={i}
              variants={fadeUp as any}
              className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`h-40 bg-gradient-to-br ${event.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold mb-2 text-text-primary">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {event.desc}
                </p>
                <Link
                  to="/events"
                  className="text-primary font-medium text-sm hover:text-secondary transition"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-20 bg-primary text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 sm:gap-12 text-center"
        >
          {[
            { number: "500+", label: "Events" },
            { number: "50K+", label: "Community Members" },
            { number: "100+", label: "Cultures" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp as any}>
              <div className="text-3xl sm:text-4xl font-bold mb-2 font-heading">
                {stat.number}
              </div>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl mb-4 font-bold">
            Ready to Join Our Community?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Connect with people who share your passion for cultural celebrations and traditions.
          </p>
          <Link
            to="/register"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

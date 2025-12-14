import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/motion";
// import { staggerContainer, fadeUp } from "../../utils/motion";

export default function EventList() {
  return (
    <main className="px-8 py-16">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="font-heading text-4xl mb-10"
      >
        All Events
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        {[1, 2, 3, 4, 5].map((id) => (
          <motion.div key={id} variants={fadeUp}>
            <Link
              to={`/events/${id}`}
              className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-5">
                <h2 className="font-heading text-xl">
                  Cultural Gathering
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Tradition • Community
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

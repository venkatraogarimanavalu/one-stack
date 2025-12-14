import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../../utils/motion";

export default function EventDetails() {
  const { id } = useParams();

  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="h-[400px] bg-gray-200 rounded-2xl mb-10"
      />

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="font-heading text-4xl mb-4"
      >
        Cultural Event #{id}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-gray-600 mb-8"
      >
        A deep dive into cultural traditions and celebrations.
      </motion.p>
    </main>
  );
}

import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const menuVariants = {
  hidden: {
    clipPath: "circle(0% at 90% 10%)",
  },
  visible: {
    clipPath: "circle(150% at 50% 50%)",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "circle(0% at 90% 10%)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="mobile-menu"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button className="close-btn" onClick={onClose}>
        <FiX size={22} />
      </button>

      <nav className="menu-links">
        {[
          "Home",
          "Who We Are",
          "Anatomy of Kind Design",
          "Our Work",
          "Email Us",
        ].map((item, i) => (
          <motion.a
            key={item}
            href="#"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>

      <div className="socials">
        <FaLinkedinIn />
        <FaInstagram />
        <FaXTwitter />
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";

import "./navbar.css";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">Venkatraogari manavalu</div>

        <button className="menu-btn" onClick={() => setOpen(true)}>
          <FiMenu size={22} />
        </button>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

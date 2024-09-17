import {
  Navbar,
  Left,
  Right,
  Hero,
  About,
  Experience,
  Projects,
  Archive,
  Contact,
} from "./components";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="w-full h-screen overflow-x-hidden overflow-y-scroll font-bodyFont bg-bodyColor text-textLight scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <div className="sticky top-0 z-50 ">
          {" "}
          <Navbar />{" "}
        </div>

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="fixed bottom-0 left-0 hidden w-32 h-full xl:inline-flex"
          >
            <Left />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="fixed bottom-0 right-0 hidden w-32 h-full xl:inline-flex"
          >
            <Right />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;

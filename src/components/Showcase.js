import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">USA Border RP</h1>
        <h2 className="showcase-header-text h-color">
          The Best ERLC Server!
        </h2>
        <p className="showcase-para p-color">
          We are a Dc Server Dedicated to ERLC, We provide 24/7 Support, Fun RPs and Much More!
        </p>

        <span className="p-color">Discord Server is Online!</span>
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Join Server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;

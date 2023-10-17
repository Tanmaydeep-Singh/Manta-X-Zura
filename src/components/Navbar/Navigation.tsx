import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className=" relative z-20 p-4 -left-8">
      <MenuItem  key={1} title={"Home"} link={"/home"} />
      <MenuItem  key={2} title={"About"} link={"/about"}/>
      <MenuItem  key={3} title={"Lottery"} link={"lottery"}/>

  </motion.ul>
);


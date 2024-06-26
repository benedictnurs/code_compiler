import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import files from "./files";

export const DropDown = ({ handleButtonClick, file }) => {
  const [open, setOpen] = useState(false);

  const getFileExtension = (fileName) => {
    return fileName.split(".").pop().toUpperCase(); // Get the last part (extension) and convert to uppercase
  };

  return (
    <div className="z-10">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <Button
          onClick={() => setOpen((pv) => !pv)}
          className="gap-2 flex h-full px-8 py-3 rounded-md text-indigo-50 bg-[#264F78] transition-colors "
        >
          <span className="font-medium text-sm">{getFileExtension(file.name)}</span> {/* Display file extension in uppercase */}
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-[#2A2D2E] shadow-xl absolute top-[120%] left-[50%] overflow-hidden"
        >
          {Object.keys(files).map((fileName) => (
            <Button
              key={fileName}
              size="sm"
              id={fileName}
              className={
                fileName === file.name
                  ? "bg-indigo-500 text-white"
                  : "bg-[#1E1E1E] text-[#D4D4D4] rounded font-mono py-1"
              }
              onClick={() => {
                handleButtonClick(fileName);
                setOpen(false); // Close dropdown after selecting a file
              }}
            >
              {getFileExtension(fileName)}
            </Button>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

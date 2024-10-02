import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BatteryReplacement = () => {

    const componentRef = useRef<HTMLDivElement>(null)

const {scrollYProgress} = useScroll({
    target: componentRef,
    offset: ['0 1', '1 1']

});

const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return <motion.div 
  style={{scale: scaleValue}}
  ref={componentRef} className="bg-red-500 h-[415px] rounded-lg col-span-12"></motion.div>;
};

export default BatteryReplacement;

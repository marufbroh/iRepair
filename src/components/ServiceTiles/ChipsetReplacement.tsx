
import useScrollGrow from '@/hooks/useScrollGrow';
import { motion } from 'framer-motion';

const ChipsetReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-5"
    ></motion.div>
  );
};

export default ChipsetReplacement;
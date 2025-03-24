import LandingLayout from '../../Layouts/LandingLayout';
import Hero from '../../UI/LandingPage/Hero';
import Requirements from '../../UI/LandingPage/Requirement';
import FAQAccor from '../../UI/LandingPage/FAQAccor';
import { motion } from 'framer-motion';

const HomePages = () => {
  return (
    <LandingLayout>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}>
        <Requirements />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}>
        <FAQAccor />
      </motion.div>
    </LandingLayout>
  );
};

export default HomePages;

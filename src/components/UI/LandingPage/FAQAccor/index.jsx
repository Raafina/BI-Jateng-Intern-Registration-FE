import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from '@heroui/react';
import FAQ from './FAQ.constant';

const FAQAccor = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('FAQ');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="FAQ" className="pt-20">
      <div className="grid grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="col-span-12 lg:col-span-5">
          <h1 className="text-[40px] md:text-5xl leading-tight text-center lg:text-left mb-5">
            Frequently Asked Question
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="col-span-12 lg:col-span-7">
          <Accordion key="faq-accordion" variant="single">
            {FAQ.map((item) => (
              <AccordionItem
                key={item.id}
                className="font-sans"
                aria-label={item.ariaLabel}
                title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccor;

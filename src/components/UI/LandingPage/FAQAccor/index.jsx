import { Accordion, AccordionItem } from '@heroui/react';
import FAQ from './FAQ.constant';
const FAQAccor = () => {
  return (
    <>
      <section id="FAQ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5 ">
            <h1 className="text-[40px] md:text-5xl  leading-tight  text-center lg:text-left mb-5">
              Frequently Asked Question
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-7 ">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQAccor;

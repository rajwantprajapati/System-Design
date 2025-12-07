import { useState } from "react";
import AccordionItem from "../../Components/AccordionItem";

const ACCORDION_LIST = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "Why use React?",
    content: "React is a popular library for building user interfaces.",
  },
  {
    title: "How do I use React?",
    content: "React is a library for building user interfaces.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="m-4">
      <h1 className="font-bold mb-4 ">Accordion Example</h1>

      {ACCORDION_LIST.map(({ title, content }, index) => (
        <AccordionItem
          key={title}
          title={title}
          content={content}
          isOpen={index === openIndex}
          toggleAccordion={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;

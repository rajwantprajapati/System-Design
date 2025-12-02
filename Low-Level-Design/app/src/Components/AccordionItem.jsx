import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 transition-all duration-300">
      <div
        className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-100"
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {isOpen && (
        <p className="px-6 py-4 text-gray-700  border-t border-gray-200 rounded-b-lg">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;

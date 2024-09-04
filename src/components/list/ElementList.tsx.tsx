import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Element {
  id: string;
  color: string;
}

interface ElementListProps {
  elements: Element[];
  width: number;
}

const ElementList: React.FC<ElementListProps> = ({ elements, width }) => (
  <div className="list">
    <AnimatePresence>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="element"
          style={{
            backgroundColor: element.color,
            width: `${width}%`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, x: '100%' }}
          transition={{ duration: 0.1 }}
          layout
        />
      ))}
    </AnimatePresence>
  </div>
);

export default ElementList;

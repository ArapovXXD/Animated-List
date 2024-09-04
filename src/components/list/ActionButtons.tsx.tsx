import React from 'react';

interface ActionButtonsProps {
  onAdd: () => void;
  onRemove: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onAdd, onRemove }) => {
  return (
    <div className="buttons">
      <button onClick={onAdd} className="button add-button">Add</button>
      <button onClick={onRemove} className="button remove-button">Delete</button>
    </div>
  );
};

export default ActionButtons;

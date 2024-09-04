import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addElement, removeElement } from '../../store/elementsSlice';
import { RootState } from '../../store/store';
import ElementList from './ElementList.tsx';
import ActionButtons from './ActionButtons.tsx';
import { makeToast } from '../../hooks/useToast';

import './list.css'

const ListView: React.FC = () => {
  const elements = useSelector((state: RootState) => state.elements.elements);
  const dispatch = useDispatch();

  const WIDTH = 20;
  const MAX_ELEMENTS_COUNT = Math.floor(100 / WIDTH);

  const handleAddElement = () => {
    if (elements.length === MAX_ELEMENTS_COUNT) {
      makeToast({ type: 'warning', text: 'Reached maximum amount of elements.' });
      return;
    }
    dispatch(addElement());
  };

  const handleRemoveElement = () => {
    if (elements.length === 0) {
      makeToast({ type: 'warning', text: 'List is already empty.' });
      return;
    }
    dispatch(removeElement());
  };

  return (
    <>
      <ActionButtons onAdd={handleAddElement} onRemove={handleRemoveElement} />
      <ElementList elements={elements} width={WIDTH} />
    </>
  );
};

export default ListView;

import { options } from '@/assets/options';
import React from 'react';

const Select = ({ id, label, onSelect }) => {
  const handleValueChange = (e) => {
    if (e.target.value) {
      onSelect(id, e.target.value);
    }
  };
  return (
    <form>
      <label htmlFor={id} className='select-label'>
        <span>{label}</span>
        <select id={id} onChange={handleValueChange}>
          <option value=''>-- 선택하세요 --</option>
          {options.map((option) => (
            <option key={option.id} value={option.key}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default Select;

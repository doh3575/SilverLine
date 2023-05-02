import React from 'react';
import Select from './select';

const SelectWrap = ({ onSelect }) => {
  return (
    <section className='select-section'>
      <p className='select-message'>
        노인안전보행요소의 <br />
        순위를 지정해주세요!
      </p>

      <div className='select-wrap'>
        <Select id='first' label='1위' onSelect={onSelect} />
        <Select id='second' label='2위' onSelect={onSelect} />
        <Select id='third' label='3위' onSelect={onSelect} />
        <Select id='fourth' label='4위' onSelect={onSelect} />
      </div>
    </section>
  );
};

export default SelectWrap;

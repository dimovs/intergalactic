import React from 'react';
import Select from 'intergalactic/select';
import { LinkTrigger } from 'intergalactic/base-trigger';

const options = Array(6)
  .fill('')
  .map((_, index) => ({
    value: index,
    label: `Label ${index}`,
    children: `Option ${index}`,
  }));

const Demo = () => (
  <Select
    tag={LinkTrigger}
    options={options}
    id='link-trigger-select'
    placeholder='Select an option'
    mt={2}
    mr='auto'
  />
);

export default Demo;

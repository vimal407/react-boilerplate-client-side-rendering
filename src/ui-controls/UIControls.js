import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Drawer from './drawer';
import Select from './dropdown';
import InputField from './input-field';
import BottomSheet from './bottom-sheet';

const UIControls = () => {
  const [isModalOpen, setOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [select, setSelect] = useState('fruit');
  const [name, setName] = useState('');

  const notify = () => toast('Hi, This is toast');

  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];

  return (
    <div className="container">
      <h1>UI Controls</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <button onClick={() => setDrawerOpen(true)}>Open Drawer</button>
      <button onClick={notify}>Show Toast</button>
      <div>
        <BottomSheet open={isModalOpen} onClose={() => setOpen(false)}>
          <div>Hi</div>
        </BottomSheet>
      </div>
      <div>
        <Drawer
          isDrawerOpen={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <h1>Hi, Drawer</h1>
          <button onClick={() => setDrawerOpen(false)}>Close me</button>
        </Drawer>
      </div>

      <div>
        <Select
          options={options}
          getOptionLabel={(option) => option?.value}
          getOptionValue={(option) => option?.value}
          onChange={(e) => setSelect(e)}
          value={select}
          isSearchable
        />
      </div>

      <div>
        <InputField
          placeholder="user name"
          value={name}
          onChange={(value) => setName(value)}
        />
      </div>
    </div>
  );
};

export default UIControls;

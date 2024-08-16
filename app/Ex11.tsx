"use client"
import React, { useState } from 'react';
import { Select } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('HTML');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    console.log(`selected ${value}`);
  };

  const options = [
    {
      label: <span>Môn Học</span>,
      options: [
        { label: <span>HTML</span>, value: 'HTML' },
        { label: <span>CSS</span>, value: 'CSS' },
        { label: <span>JavaScript</span>, value: 'JavaScript' },
        { label: <span>NextJS</span>, value: 'NextJS' },
      ],
    },
  ];

  return (
    <Select
      defaultValue={selectedValue}
      style={{ width: 200 }}
      onChange={handleChange}
      options={options.map(group => ({
        ...group,
        options: group.options.map(option => ({
          ...option,
          label: (
            <span>
              {option.label}
              {selectedValue === option.value && (
                <CheckOutlined style={{ marginLeft: 100 }} />
              )}
            </span>
          ),
        })),
      }))}
    />
  );
};

export default App;

import { useState } from 'react';

const useStorage = ({ initData }) => {
  const [data, setData] = useState(initData);
  const deleteName = (name) => {
    setData(data.filter(element => element !== name));
  }
  return {
    data,
    deleteName,
  };
};

export default useStorage;

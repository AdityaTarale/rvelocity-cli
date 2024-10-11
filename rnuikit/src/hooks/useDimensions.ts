import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useDimensions = (type: 'window' | 'screen') => {
  const [dimension, setDimension] = useState(Dimensions.get(type));

  useEffect(() => {
    const onChange = result => {
      setDimension(result[type]);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, [type]);

  return dimension;
};

export default useDimensions;

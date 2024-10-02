import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useDimensions = () => {
  const [screen, setScreen] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreen(result.screen);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  return screen;
};

export default useDimensions;

import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

const isOrientationPortrait = ({width, height}: ScaledSize) => height >= width;
const isOrientationLandscape = ({width, height}: ScaledSize) => width >= height;

// PSI-671: Hook for finding orientation of device
export default function useDeviceOrientation() {
  const screenDimensions = Dimensions.get('screen');
  const initialState = {
    portrait: isOrientationPortrait(screenDimensions),
    landscape: isOrientationLandscape(screenDimensions)
  };

  const [orientation, setOrientation] = useState(initialState);

  useEffect(() => {
    const onChange = ({screen}: {screen: ScaledSize}) => {
      setOrientation({
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen)
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      if (typeof subscription.remove === 'function') {
        subscription.remove();
      }
    };
  }, []);

  return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}

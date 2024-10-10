import React, { type ReactElement, useLayoutEffect, useState } from 'react';
import { Image, type ImageProps, type ImageURISource } from 'react-native';

export interface AutoImageProps extends ImageProps {
  /**
   * How wide should the image be?
   */
  maxWidth?: number;
  /**
   * How tall should the image be?
   */
  maxHeight?: number;
}

/**
 * A hook that will return the scaled dimensions of an image based on the
 * provided dimensions' aspect ratio. If no desired dimensions are provided,
 * it will return the original dimensions of the remote image.
 *
 * How is this different from `resizeMode: 'contain'`? Firstly, you can
 * specify only one side's size (not both). Secondly, the image will scale to fit
 * the desired dimensions instead of just being contained within its image-container.
 *
 */
function useAutoImage(
  source: ImageURISource | number,
  dimensions?: [maxWidth: number, maxHeight: number],
): [width: number, height: number] {
  const [[remoteWidth, remoteHeight], setRemoteImageDimensions] = useState([0, 0]);
  const remoteAspectRatio = remoteWidth / remoteHeight;
  const [maxWidth, maxHeight] = dimensions ?? [0, 0];

  useLayoutEffect(() => {
    if (typeof source === 'number') {
      // Local image
      const { width, height } = Image.resolveAssetSource(source);
      setRemoteImageDimensions([width, height]);
    } else if (typeof source?.uri === 'string' && source.uri.trim().length > 0) {
      // Remote image
      Image.getSize(source.uri, (w, h) => {
        setRemoteImageDimensions([w, h]);
      });
    }
  }, [source]);

  if (Number.isNaN(remoteAspectRatio)) return [0, 0];

  if (Boolean(maxWidth) && Boolean(maxHeight)) {
    const aspectRatio = Math.min(maxWidth / remoteWidth, maxHeight / remoteHeight);
    return [remoteWidth * aspectRatio, remoteHeight * aspectRatio];
  } else if (!Number.isNaN(maxWidth)) {
    return [maxWidth, maxWidth / remoteAspectRatio];
  } else if (!Number.isNaN(maxHeight)) {
    return [maxHeight * remoteAspectRatio, maxHeight];
  } else {
    return [remoteWidth, remoteHeight];
  }
}

/**
 * An Image component that automatically sizes a remote or data-uri image.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md)
 */
const AutoImage = (props: AutoImageProps): ReactElement => {
  const { maxWidth = 0, maxHeight = 0, onError, style, source, ...imageProps } = props;

  const [width, height] = useAutoImage(source as ImageURISource | number, [maxWidth, maxHeight]);

  return (
    <Image {...imageProps} source={source} style={[{ width, height }, style]} onError={onError} />
  );
};

export default AutoImage;

// export const image = require('../images/image.png');

export const images = {
  //   image,
};

export type Image = keyof typeof images;

export const getImage = (imageKey: Image): string => {
  return images[imageKey];
};

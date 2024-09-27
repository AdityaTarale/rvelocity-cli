// export const animation = require('../animations/animation.json');

export const animations = {
  //   animation,
};

export type Animation = keyof typeof animations;

export const getAnimation = (animationKey: Animation): string => {
  return animations[animationKey];
};

import _ from 'lodash';
import { ANIMATION_PROPERTIES } from './constant';
import { Animation } from './interface';

/**
 * Generate animation for entity/primitive
 * @param props
 * @returns animationParams
 */
export const getSingleAnimation = (props: Animation): string => {
  let animationKey = '';

  _.forEach(props, (value, key: string) => {
    if (!_.includes(ANIMATION_PROPERTIES, key)) return;

    if (_.isObject(value)) {
      animationKey += `${key}: ${_.values(value).join(' ')}; `;
      return;
    }

    animationKey += `${key}: ${value}; `;
  });

  return animationKey;
};

const getAnimationParams = (props: Animation | Animation[]): string[] => {
  if (!_.isArray(props)) return [getSingleAnimation(props)];

  return _.map(props, (value) => getSingleAnimation(value));
};

const getAnimationName = (index: number): string => {
  if (index === 0) return 'animation';

  return `animation__${index + 1}`;
};

/**
 * Generate animations for entity/primitive
 * @param props
 * @returns animationParams
 */
export const getMultipleAnimation = (props: Animation | Animation[]): Record<string, string> => {
  const params = getAnimationParams(props);

  const animations = _.reduce(
    params,
    (acc, curr, index) => ({
      ...acc,
      [getAnimationName(index)]: curr,
    }),
    {} as Record<string, string>
  );

  return animations;
};

/**
 * Generate animations for entity/primitive
 * @param props
 * @returns animationParams
 */
export const getAnimations = (props: Animation | Animation[]): Record<string, string> => {
  // Get a single animations object
  if (!_.isArray(props)) {
    return {
      animation: getSingleAnimation(props),
    };
  }

  // Get a multiple animations object
  return getMultipleAnimation(props);
};

/**
 * Convert object/array in an object to a string
 * @param props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertObjectToString = (props: Record<any, any>) => {
  _.forEach(props, (value, key) => {
    // Join all objects into a single values
    if (_.isObject(value)) {
      props[key] = _.values(value).join(' ');
    }
  });
};

/**
 * Convert object to a string
 * @param props
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAframeProps = (props: Record<any, any>): string => {
  convertObjectToString(props);

  return _.map(props, (value: string | boolean, key: string) => `${key}: ${value}`).join('; ');
};

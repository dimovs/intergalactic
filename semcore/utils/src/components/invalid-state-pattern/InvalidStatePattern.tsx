import React from 'react';
import createComponent, { sstyled, Root } from '../../core/index';
import style from './invalidStatePattern.shadow.css';

const InvalidStatePatternComponent = () => {
  const SPattern = Root;

  return sstyled(style)(<SPattern render={'div'} />);
};
/**
 * @deprecated
 */
export const InvalidStatePattern = createComponent(InvalidStatePatternComponent);
/**
 * @deprecated
 */
export default InvalidStatePattern;

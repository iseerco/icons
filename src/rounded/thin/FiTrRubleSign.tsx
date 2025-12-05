import React from 'react';
import type { IconProps } from '../../types';

export const FiTrRubleSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.5,15c4.136,0,7.5-3.364,7.5-7.5S18.636,0,14.5,0h-5c-2.481,0-4.5,2.019-4.5,4.5V14H2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v3H2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v4.59c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-4.59H15.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H6v-3H14.5ZM6,4.5c0-1.93,1.57-3.5,3.5-3.5h5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5H6V4.5Z"/></svg>
);

FiTrRubleSign.displayName = 'FiTrRubleSign';

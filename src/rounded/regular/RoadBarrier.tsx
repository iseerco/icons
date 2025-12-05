import React from 'react';
import type { IconProps } from '../../types';

export const RoadBarrier: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M23,2c-.552,0-1,.448-1,1v1H2v-1c0-.552-.448-1-1-1s-1,.448-1,1V21c0,.553,.448,1,1,1s1-.447,1-1v-6H22v6c0,.553,.448,1,1,1s1-.447,1-1V3c0-.552-.448-1-1-1ZM9.914,13l7-7h4.172l-7,7h-4.172Zm-7,0l7-7h4.172l-7,7H2.914ZM7.086,6L2,11.086V6H7.086Zm9.828,7l5.086-5.086v5.086h-5.086Z"/>
</svg>
);

RoadBarrier.displayName = 'RoadBarrier';

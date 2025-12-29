import React from 'react';
import type { IconProps } from '../../types';

export const TachometerFastest: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,1C.374.982-4.414,16.17,5.112,22.818l.639.449L8,20h8l2.249,3.267.639-.449C28.418,16.166,23.621.98,12,1ZM10.169,12.2a2,2,0,0,1,3.81.581L20.643,15.7l-.8,1.831-6.664-2.924A2,2,0,0,1,10.169,12.2Z"/></svg>
);

TachometerFastest.displayName = 'TachometerFastest';

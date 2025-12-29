import React from 'react';
import type { IconProps } from '../../types';

export const ConveyorBeltAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m13,13H2V5c0-1.654,1.346-3,3-3h5c1.654,0,3,1.346,3,3v8Zm9,0h-7v-5c0-1.103.897-2,2-2h3c1.103,0,2,.897,2,2v5Zm-2.5,2H4.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm-15,6c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm7.5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm7.5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/>
</svg>
);

ConveyorBeltAlt.displayName = 'ConveyorBeltAlt';

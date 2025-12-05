import React from 'react';
import type { IconProps } from '../../types';

export const ConveyorBeltEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m19.5,15H4.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm-15,6c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm7.5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm7.5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/>
</svg>
);

ConveyorBeltEmpty.displayName = 'ConveyorBeltEmpty';

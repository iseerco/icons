import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCube: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.122,0,1.622,6V18l10.5,6,10.5-6V6Zm5.986,6.876-6.09,3.4L6.171,6.856l5.951-3.4ZM4.622,9.425,10.5,12.861v6.757L4.622,16.259ZM13.5,19.757V12.881l6.122-3.415v6.793Z"/></svg>
);

FiBsCube.displayName = 'FiBsCube';

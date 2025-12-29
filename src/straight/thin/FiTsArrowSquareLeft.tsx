import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23ZM7.238,11.5h10.762v1H7.238l4.757,4.757-.707,.707-4.809-4.809c-.309-.308-.479-.718-.479-1.155s.17-.847,.479-1.155l4.809-4.809,.707,.707-4.757,4.757Z"/></svg>
);

FiTsArrowSquareLeft.displayName = 'FiTsArrowSquareLeft';

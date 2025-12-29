import React from 'react';
import type { IconProps } from '../../types';

export const FiTr4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,0c-.276,0-.5,.224-.5,.5V14H8.5c-1.93,0-3.5-1.57-3.5-3.5V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V10.5c0,2.481,2.019,4.5,4.5,4.5h10.5v8.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V.5c0-.276-.224-.5-.5-.5Z"/></svg>
);

FiTr4.displayName = 'FiTr4';

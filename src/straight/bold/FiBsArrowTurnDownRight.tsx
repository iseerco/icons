import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowTurnDownRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.29,12.71l-5.68-6.22-2.22,2.02,4.1,4.49H3.5c-.28,0-.5-.22-.5-.5V2H0V12.5c0,1.93,1.57,3.5,3.5,3.5h15.99l-4.1,4.49,2.22,2.02,5.63-6.17c1.01-1.01,1.01-2.67,.05-3.63Z"/></svg>
);

FiBsArrowTurnDownRight.displayName = 'FiBsArrowTurnDownRight';

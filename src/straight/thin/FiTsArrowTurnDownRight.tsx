import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowTurnDownRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.55,13.38l-6.18-6.72-.74,.68,6.12,6.66H2.5c-.83,0-1.5-.67-1.5-1.5V2H0V12.5c0,1.38,1.12,2.5,2.5,2.5H22.76l-6.12,6.66,.74,.68,6.16-6.71c.62-.62,.62-1.64,.01-2.25Z"/></svg>
);

FiTsArrowTurnDownRight.displayName = 'FiTsArrowTurnDownRight';

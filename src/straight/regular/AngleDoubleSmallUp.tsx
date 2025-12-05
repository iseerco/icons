import React from 'react';
import type { IconProps } from '../../types';

export const AngleDoubleSmallUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.281,11.281l-5.281-5.281-5.281,5.281-1.414-1.414,5.281-5.281c.756-.756,2.072-.756,2.828,0l5.281,5.281-1.414,1.414Zm1.414,5.591l-5.871-5.871c-.455-.455-1.193-.455-1.648,0l-5.871,5.871,1.414,1.414,5.281-5.281,5.281,5.281,1.414-1.414Z"/></svg>
);

AngleDoubleSmallUp.displayName = 'AngleDoubleSmallUp';

import React from 'react';
import type { IconProps } from '../../types';

export const RulerHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,6.96H4C1.794,6.96,0,8.754,0,10.96v2.04c0,2.206,1.794,4,4,4H20c2.206,0,4-1.794,4-4v-2.04c0-2.206-1.794-4-4-4Zm2,6.04c0,1.103-.897,2-2,2h-1v-2.015c0-.553-.447-1-1-1s-1,.447-1,1v2.015h-2v-2.015c0-.553-.447-1-1-1s-1,.447-1,1v2.015h-2v-2.015c0-.553-.447-1-1-1s-1,.447-1,1v2.015h-1.976v-2.015c0-.553-.447-1-1-1s-1,.447-1,1v2.015h-1.024c-1.103,0-2-.897-2-2v-2.04c0-1.103,.897-2,2-2H20c1.103,0,2,.897,2,2v2.04Z"/></svg>
);

RulerHorizontal.displayName = 'RulerHorizontal';

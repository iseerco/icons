import React from 'react';
import type { IconProps } from '../../types';

export const MedicalStar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m13.874,12l8.841,5.414-1.045,1.705-8.711-5.334v10.215h-2v-10.215l-8.711,5.334-1.045-1.705,8.841-5.414L1.203,6.586l1.045-1.705,8.711,5.334V0h2v10.215l8.711-5.334,1.045,1.705-8.841,5.414Z"/></svg>
);

MedicalStar.displayName = 'MedicalStar';

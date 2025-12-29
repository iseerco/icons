import React from 'react';
import type { IconProps } from '../../types';

export const FileMedicalAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22,7v17H2v-8h5.035l1.341-2.012,3,6,2.659-3.988h3.965v-2h-5.035l-1.341,2.012-3-6-2.659,3.988h-3.965V3c0-1.657,1.343-3,3-3h10v7h7ZM17,.586v4.414h4.414L17,.586Z"/></svg>
);

FileMedicalAlt.displayName = 'FileMedicalAlt';

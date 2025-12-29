import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMedicalStar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m14.831,12l8.144,4.987-1.566,2.559-7.95-4.868v9.323h-3v-9.323l-7.95,4.868-1.566-2.559,8.144-4.987L.942,7.013l1.566-2.559,7.95,4.868V0h3v9.323l7.95-4.868,1.566,2.559-8.144,4.987Z"/></svg>
);

FiBsMedicalStar.displayName = 'FiBsMedicalStar';

import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHatBirthday: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.791,3.836a2,2,0,1,0-1.582,0L0,24.015H24Zm3.262,12.048-2.917,5.131H10.692L14.8,13.628ZM12,8.589l1.085,1.952L7.26,21.015H5.1Z"/></svg>
);

FiBsHatBirthday.displayName = 'FiBsHatBirthday';

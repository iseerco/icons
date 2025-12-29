import React from 'react';
import type { IconProps } from '../../types';

export const CircleU: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12.039.02C5.422.02.039,5.402.039,12.02s5.383,12,12,12,12-5.383,12-12S18.655.02,12.039.02Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.02,12.039,2.02s10,4.486,10,10-4.486,10-10,10Zm5-14.5v6c0,2.757-2.243,5-5,5s-5-2.243-5-5v-6c0-.553.448-1,1-1s1,.447,1,1v6c0,1.654,1.346,3,3,3s3-1.346,3-3v-6c0-.553.448-1,1-1s1,.447,1,1Z"/></svg>
);

CircleU.displayName = 'CircleU';

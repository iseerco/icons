import React from 'react';
import type { IconProps } from '../../types';

export const FiTrCircle3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5-8.5c0,1.93-1.57,3.5-3.5,3.5h-5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h5c1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5h-4c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3.5c1.103,0,2-.897,2-2s-.897-2-2-2h-4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4.5c1.654,0,3,1.346,3,3,0,.924-.42,1.751-1.079,2.302,1.224,.546,2.079,1.774,2.079,3.198Z"/></svg>
);

FiTrCircle3.displayName = 'FiTrCircle3';

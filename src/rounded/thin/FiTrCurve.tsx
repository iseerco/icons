import React from 'react';
import type { IconProps } from '../../types';

export const FiTrCurve: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m.615,24.038c-.276,0-.5-.224-.5-.5C.115,10.623,10.623.115,23.538.115c.276,0,.5.224.5.5s-.224.5-.5.5C11.174,1.115,1.115,11.174,1.115,23.538c0,.276-.224.5-.5.5Z"/>
</svg>
);

FiTrCurve.displayName = 'FiTrCurve';

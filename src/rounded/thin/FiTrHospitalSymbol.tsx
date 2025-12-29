import React from 'react';
import type { IconProps } from '../../types';

export const FiTrHospitalSymbol: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12.5,0h-1C5.159,0,0,5.159,0,11.5v1c0,6.341,5.159,11.5,11.5,11.5h1c6.341,0,11.5-5.159,11.5-11.5v-1C24,5.159,18.841,0,12.5,0Zm10.5,12.5c0,5.79-4.71,10.5-10.5,10.5h-1c-5.79,0-10.5-4.71-10.5-10.5v-1C1,5.71,5.71,1,11.5,1h1c5.79,0,10.5,4.71,10.5,10.5v1Zm-6-6v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-5h-8v5c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5v5h8v-5c0-.276.224-.5.5-.5s.5.224.5.5Z"/></svg>
);

FiTrHospitalSymbol.displayName = 'FiTrHospitalSymbol';

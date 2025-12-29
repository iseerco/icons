import React from 'react';
import type { IconProps } from '../../types';

export const FiTsMedicalStar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12.917,12l9.536,5.84-.521.854-9.473-5.801v11.107h-1v-11.107L1.986,18.693l-.521-.854,9.536-5.84L1.465,6.16l.521-.854,9.473,5.801V0h1v11.107l9.473-5.801.521.854-9.536,5.84Z"/></svg>
);

FiTsMedicalStar.displayName = 'FiTsMedicalStar';

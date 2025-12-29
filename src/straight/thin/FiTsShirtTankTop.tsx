import React from 'react';
import type { IconProps } from '../../types';

export const FiTsShirtTankTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m20.667,8.944c-1.62-.573-2.667-2.178-2.667-4.089V0h-1v3c0,2.757-2.243,5-5,5s-5-2.243-5-5V0h-1v4.855c0,1.911-1.047,3.517-2.667,4.089l-.333.118v14.938h18v-14.938l-.333-.118Zm-.667,14.056H4v-13.245c1.475-.648,2.518-1.995,2.869-3.647,1.053,1.732,2.959,2.892,5.131,2.892s4.077-1.159,5.131-2.892c.352,1.652,1.394,2.998,2.869,3.647v13.245Z"/>
</svg>
);

FiTsShirtTankTop.displayName = 'FiTsShirtTankTop';

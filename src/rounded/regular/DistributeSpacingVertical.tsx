import React from 'react';
import type { IconProps } from '../../types';

export const DistributeSpacingVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,4H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm1,17c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1Zm-4-8v-2c0-2.21-1.79-4-4-4H8c-2.21,0-4,1.79-4,4v2c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4Zm-4-4c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2H8c-1.1,0-2-.9-2-2v-2c0-1.1,.9-2,2-2h8Z"/></svg>
);

DistributeSpacingVertical.displayName = 'DistributeSpacingVertical';

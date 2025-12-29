import React from 'react';
import type { IconProps } from '../../types';

export const BriefcaseBlank: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,4h-3V2c0-1.1-.9-2-2-2H8c-1.1,0-2,.9-2,2v2H3c-1.65,0-3,1.35-3,3V24H24V7c0-1.65-1.35-3-3-3ZM8,2h8v2H8V2Z"/></svg>
);

BriefcaseBlank.displayName = 'BriefcaseBlank';

import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltFromLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.555,11.083l-5.555-5.083v5H2V3H0V21H2V13H18v5.159l5.555-5.083c.593-.532,.593-1.461,0-1.993Z"/></svg>
);

ArrowAltFromLeft.displayName = 'ArrowAltFromLeft';

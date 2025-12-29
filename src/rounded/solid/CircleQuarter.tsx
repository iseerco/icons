import React from 'react';
import type { IconProps } from '../../types';

export const CircleQuarter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,13H3.04c-.93,0-1.8-.42-2.38-1.15-.58-.73-.8-1.68-.59-2.6H.08C1.12,4.72,4.72,1.12,9.26,.08c.92-.21,1.86,0,2.6,.59,.73,.58,1.15,1.45,1.15,2.38V12c0,.55-.45,1-1,1Z"/></svg>
);

CircleQuarter.displayName = 'CircleQuarter';

import React from 'react';
import type { IconProps } from '../../types';

export const BlindsRaised: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.101,22c.151,.744,.481,1.416,.922,2H0V6H18v4H2v12h14.101Zm5.899-3.816V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v1H18V2h1c.551,0,1,.448,1,1v15.184c-1.161,.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.302-.839-2.402-2-2.816Z"/></svg>
);

BlindsRaised.displayName = 'BlindsRaised';

import React from 'react';
import type { IconProps } from '../../types';

export const SkiJump: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.759,12.266a3.974,3.974,0,0,1-2.068,2.257L.849,23.93.026,22.106,5,19.862V11.737a2.982,2.982,0,0,1,.879-2.122L9.781,6H2V4h9.959l1.062,1.071A3.009,3.009,0,0,1,14,7.25a2.978,2.978,0,0,1-.879,2.159l0-.005c-.008.008-.01.018-.018.026L7,15.116v3.843l13.857-6.253a2,2,0,0,0,.955-2.653l1.812-.846A3.975,3.975,0,0,1,23.759,12.266ZM16.5,5A2.5,2.5,0,1,0,14,2.5,2.5,2.5,0,0,0,16.5,5Z"/></svg>
);

SkiJump.displayName = 'SkiJump';

import React from 'react';
import type { IconProps } from '../../types';

export const FaucetDrip: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,17v2h-8v-2c0-.552-.448-1-1-1h-2v-8h2c4.963,0,9,4.037,9,9ZM11,5h5v-2H4v2h5v3H0v8h11V5Z"/>
</svg>
);

FaucetDrip.displayName = 'FaucetDrip';

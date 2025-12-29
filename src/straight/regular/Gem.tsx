import React from 'react';
import type { IconProps } from '../../types';

export const Gem: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.406,7.228A3.009,3.009,0,0,0,18.986,6H5.014a3.009,3.009,0,0,0-2.42,1.228L.547,10.021a2.992,2.992,0,0,0,.344,3.936L12,23.931,23.146,13.923a2.982,2.982,0,0,0,.307-3.9ZM7.309,13l2.305,6.1L2.816,13Zm7.244,0L12,19.757,9.447,13ZM9.477,11l1.2-3h2.646l1.2,3Zm7.214,2h4.491l-6.8,6.1Zm3.1-4.591L21.692,11H16.677l-1.2-3h3.509A1,1,0,0,1,19.793,8.409Zm-15.586,0A1,1,0,0,1,5.014,8H8.523l-1.2,3H2.308Z"/><rect x="11" width={size} height={size}/><rect x="16.138" y="1.686" width={size} height={size} transform="matrix(0.537, -0.844, 0.844, 0.537, 6.068, 16.428)"/><rect x="5" y="0.824" width={size} height={size} transform="translate(-0.504 3.642) rotate(-32.48)"/></svg>
);

Gem.displayName = 'Gem';

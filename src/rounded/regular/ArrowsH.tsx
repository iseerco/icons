import React from 'react';
import type { IconProps } from '../../types';

export const ArrowsH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.312,10.012c-.29-.327-.574-.637-.771-.834L19.713,6.3a1,1,0,0,0-1.426,1.4l2.834,2.885c.108.108.244.255.389.414H2.555c.146-.16.284-.308.4-.42L5.779,7.7A1,1,0,0,0,4.353,6.3L1.53,9.172c-.2.2-.487.513-.777.84A2.99,2.99,0,0,0,0,11.994v.012a3,3,0,0,0,.754,1.983c.289.326.573.636.769.833L4.353,17.7a1,1,0,0,0,1.426-1.4L2.944,13.414c-.108-.108-.244-.255-.389-.414H21.51c-.145.16-.283.308-.4.42L18.287,16.3a1,1,0,1,0,1.426,1.4l2.822-2.873c.2-.2.486-.513.777-.84A3,3,0,0,0,23.312,10.012Z"/></svg>
);

ArrowsH.displayName = 'ArrowsH';

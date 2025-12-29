import React from 'react';
import type { IconProps } from '../../types';

export const CoffinCross: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.571,6.732l-1.436-3.589c-.764-1.91-2.586-3.144-4.643-3.144h-5.042c-2.057,0-3.879,1.233-4.643,3.144l-1.436,3.589c-.438,1.098-.544,2.288-.305,3.443l2.035,9.837c.478,2.311,2.537,3.987,4.896,3.987h3.944c2.358,0,4.418-1.677,4.896-3.987l2.035-9.837c.238-1.157.133-2.348-.305-3.443Zm-5.571,3.268h-2v5c0,.553-.447,1-1,1s-1-.447-1-1v-5h-2c-.553,0-1-.447-1-1s.447-1,1-1h2v-2c0-.553.447-1,1-1s1,.447,1,1v2h2c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
);

CoffinCross.displayName = 'CoffinCross';

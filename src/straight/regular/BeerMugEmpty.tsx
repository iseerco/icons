import React from 'react';
import type { IconProps } from '../../types';

export const BeerMugEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m11,18h-2V6h2v12Zm4-12h-2v12h2V6Zm-8,0h-2v12h2V6Zm16.961,2.98v8h-5v3c0,1.654-1.346,3-3,3H3.961c-1.654,0-3-1.346-3-3V2.98H-.039V.98h20v2h-1v3h2c1.654,0,3,1.346,3,3Zm-7-6H2.961v17c0,.552.449,1,1,1h12c.551,0,1-.448,1-1V2.98Zm5,6c0-.552-.449-1-1-1h-2v7h3v-6Z"/>
</svg>
);

BeerMugEmpty.displayName = 'BeerMugEmpty';

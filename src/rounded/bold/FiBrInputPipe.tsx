import React from 'react';
import type { IconProps } from '../../types';

export const FiBrInputPipe: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m8,8.5v7c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-7c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5Zm16-1v9c0,3.032-2.467,5.5-5.5,5.5H5.5c-3.033,0-5.5-2.468-5.5-5.5V7.5C0,4.468,2.467,2,5.5,2h13c3.033,0,5.5,2.468,5.5,5.5Zm-3,0c0-1.379-1.122-2.5-2.5-2.5H5.5c-1.378,0-2.5,1.121-2.5,2.5v9c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5V7.5Z"/></svg>
);

FiBrInputPipe.displayName = 'FiBrInputPipe';

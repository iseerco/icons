import React from 'react';
import type { IconProps } from '../../types';

export const M: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24h-2V2.499c0-.257-.087-.415-.257-.468-.151-.047-.383-.017-.552,.222l-9.191,14.103L2.791,2.226c-.149-.212-.382-.241-.534-.195-.17,.054-.257,.211-.257,.468V24H0V2.499C0,1.373,.65,.44,1.655,.123c1.032-.323,2.153,.07,2.792,.983l7.553,11.587L19.534,1.134c.657-.941,1.775-1.335,2.811-1.011,1.005,.317,1.655,1.25,1.655,2.376V24Z"/></svg>
);

M.displayName = 'M';

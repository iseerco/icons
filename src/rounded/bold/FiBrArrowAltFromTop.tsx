import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowAltFromTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,0H4.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h6v14h-3.587c-.811,0-1.218,.994-.644,1.575l5.087,5.154c.356,.36,.932,.36,1.288,0l5.087-5.154c.574-.581,.167-1.575-.644-1.575h-3.587V3h6c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Z"/></svg>
);

FiBrArrowAltFromTop.displayName = 'FiBrArrowAltFromTop';

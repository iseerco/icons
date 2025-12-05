import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowsAltV: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.087,16.923h-3.587V6.923h3.587c.811,0,1.218-.994,.644-1.575L12.644,.193c-.356-.36-.932-.36-1.288,0L6.269,5.348c-.574,.581-.167,1.575,.644,1.575h3.587v10h-3.587c-.811,0-1.218,.994-.644,1.575l5.087,5.154c.356,.36,.932,.36,1.288,0l5.087-5.154c.574-.581,.167-1.575-.644-1.575Z"/></svg>
);

FiBrArrowsAltV.displayName = 'FiBrArrowsAltV';

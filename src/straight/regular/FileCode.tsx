import React from 'react';
import type { IconProps } from '../../types';

export const FileCode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.414,0H5c-1.654,0-3,1.346-3,3V24H22V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586V3.414ZM4,22V3c0-.551,.449-1,1-1H13v7h7v13H4Zm6.774-8.703l-2.778,2.778,2.734,2.718-1.414,1.414-2.734-2.734c-.775-.775-.775-2.037,0-2.812l2.778-2.778,1.414,1.414Zm6.71,1.364c.774,.775,.774,2.037,0,2.812l-2.734,2.734-1.414-1.414,2.734-2.734-2.778-2.762,1.414-1.414,2.778,2.778Z"/></svg>
);

FileCode.displayName = 'FileCode';

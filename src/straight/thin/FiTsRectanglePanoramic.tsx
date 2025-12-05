import React from 'react';
import type { IconProps } from '../../types';

export const FiTsRectanglePanoramic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,19H0V5h24v14Zm-23-1h22V6H1v12Z"/>
</svg>
);

FiTsRectanglePanoramic.displayName = 'FiTsRectanglePanoramic';

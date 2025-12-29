import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowAltFromBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.5,23V7h6.625L13.356,.612c-.69-.779-2.028-.774-2.711-.002L4.875,7h6.625V23H3v1H21v-1H12.5ZM11.391,1.276c.315-.356,.902-.356,1.218,0l4.266,4.724H7.125L11.391,1.276Z"/></svg>
);

FiTsArrowAltFromBottom.displayName = 'FiTsArrowAltFromBottom';

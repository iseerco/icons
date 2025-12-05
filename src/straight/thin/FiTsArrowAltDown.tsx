import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowAltDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.5,17V0h-1V17H4.786l5.846,6.389c.348,.389,.847,.611,1.368,.611s1.019-.222,1.366-.609l5.848-6.391h-6.714Zm.127,5.718l-.003,.004c-.322,.359-.923,.363-1.251-.004l-4.317-4.718h9.889l-4.317,4.718Z"/></svg>
);

FiTsArrowAltDown.displayName = 'FiTsArrowAltDown';

import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowAltCircleDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm.5-17h-1v6H5.732l4.999,5.463c.306,.341,.744,.537,1.202,.537s.895-.195,1.201-.535l5-5.465h-5.635V6Zm-.104,10.792l-.003,.003c-.237,.264-.675,.268-.92-.003l-3.469-3.792h7.862l-3.469,3.792Z"/></svg>
);

FiTsArrowAltCircleDown.displayName = 'FiTsArrowAltCircleDown';

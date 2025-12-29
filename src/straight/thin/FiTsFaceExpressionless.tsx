import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFaceExpressionless: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-2-13H6v-1h4v1Zm4-1h4v1h-4v-1Zm-7,6h10v1H7v-1Z"/></svg>
);

FiTsFaceExpressionless.displayName = 'FiTsFaceExpressionless';

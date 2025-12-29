import React from 'react';
import type { IconProps } from '../../types';

export const FaceExpressionless: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0ZM6,9h4v2H6v-2Zm11,8H7v-2h10v2Zm1-6h-4v-2h4v2Z"/></svg>
);

FaceExpressionless.displayName = 'FaceExpressionless';

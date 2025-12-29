import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCommentSmile: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.667,14.127l.666.746c-.097.086-2.414,2.127-5.333,2.127s-5.236-2.041-5.333-2.127l.666-.746c.021.019,2.137,1.873,4.667,1.873s4.646-1.854,4.667-1.873Zm7.333-2.127v12h-12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11h11v-11Zm-15-1c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm8,0c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Z"/></svg>
);

FiTsCommentSmile.displayName = 'FiTsCommentSmile';

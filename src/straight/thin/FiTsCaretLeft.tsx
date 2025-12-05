import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCaretLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15,19.305l-6.346-5.805c-.425-.383-.665-.934-.654-1.51.01-.547.249-1.072.658-1.438l6.342-5.802v14.555Zm-1-12.285l-4.67,4.273c-.21.188-.325.44-.33.716-.006.286.113.559.326.75l4.674,4.276V7.02Z"/>
</svg>
);

FiTsCaretLeft.displayName = 'FiTsCaretLeft';

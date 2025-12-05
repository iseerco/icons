import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCommentAltMiddle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.005,23.663c-.356,0-.716-.126-1.001-.379l-3.898-3.284H0V2.5C0,1.122,1.121,0,2.5,0H21.5c1.379,0,2.5,1.122,2.5,2.5V20h-7.032l-3.985,3.295c-.275,.245-.626,.368-.978,.368ZM1,19H7.471l4.188,3.527c.2,.177,.485,.176,.674,.008l4.276-3.536h6.392V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V19Z"/></svg>
);

FiTsCommentAltMiddle.displayName = 'FiTsCommentAltMiddle';

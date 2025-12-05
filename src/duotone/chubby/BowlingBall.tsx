import React from 'react';
import type { IconProps } from '../../types';

export const BowlingBall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><circle cx="12" cy="12" opacity=".5" r="11"/><circle cx="9.362" cy="6.968" r="1"/><circle cx="11.362" cy="9.968" r="1"/><circle cx="7.362" cy="9.968" r="1"/></svg>
);

BowlingBall.displayName = 'BowlingBall';

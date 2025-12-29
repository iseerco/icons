import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBracketRoundRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,12c0,7.38-5.51,11.74-5.75,11.92l-.61-.79c.05-.04,5.36-4.26,5.36-11.13S8.7,.91,8.64,.87l.61-.79c.23,.18,5.75,4.54,5.75,11.92Z"/></svg>
);

FiTsBracketRoundRight.displayName = 'FiTsBracketRoundRight';

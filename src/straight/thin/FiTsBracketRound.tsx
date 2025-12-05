import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBracketRound: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.36,23.13l-.61,.79c-.23-.18-5.75-4.54-5.75-11.92S14.51,.26,14.75,.08l.61,.79c-.05,.04-5.36,4.26-5.36,11.13s5.3,11.09,5.36,11.13Z"/></svg>
);

FiTsBracketRound.displayName = 'FiTsBracketRound';

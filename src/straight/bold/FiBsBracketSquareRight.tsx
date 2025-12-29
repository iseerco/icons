import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBracketSquareRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.5,24h-3.5v-3h3.5c.28,0,.5-.22,.5-.5V3.5c0-.28-.22-.5-.5-.5h-3.5V0h3.5c1.93,0,3.5,1.57,3.5,3.5V20.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>
);

FiBsBracketSquareRight.displayName = 'FiBsBracketSquareRight';

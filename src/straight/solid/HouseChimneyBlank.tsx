import React from 'react';
import type { IconProps } from '../../types';

export const HouseChimneyBlank: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.849,7.681l-.886-.693h.037V1.987h-2v3.464L13.849,.638c-1.088-.854-2.609-.854-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H24V10.043c0-.929-.42-1.79-1.151-2.362Z"/></svg>
);

HouseChimneyBlank.displayName = 'HouseChimneyBlank';

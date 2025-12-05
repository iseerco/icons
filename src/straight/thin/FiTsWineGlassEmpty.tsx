import React from 'react';
import type { IconProps } from '../../types';

export const FiTsWineGlassEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m4,0v10c0,4.242,3.322,7.714,7.5,7.975v5.025h-4.5v1h10v-1h-4.5v-5.025c4.178-.26,7.5-3.732,7.5-7.975V0H4Zm15,10c0,3.859-3.14,7-7,7s-7-3.141-7-7V1h14v9Z"/>
</svg>
);

FiTsWineGlassEmpty.displayName = 'FiTsWineGlassEmpty';

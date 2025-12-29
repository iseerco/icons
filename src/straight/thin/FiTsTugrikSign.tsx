import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTugrikSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.5,1V9.06l7.5-2.5v1.05l-7.5,2.5v3.39l7.5-2.5v1.05l-7.5,2.5v9.45h-1V14.88l-7.5,2.5v-1.05l7.5-2.5v-3.39l-7.5,2.5v-1.05l7.5-2.5V1H2V0H22V1H12.5Z"/></svg>
);

FiTsTugrikSign.displayName = 'FiTsTugrikSign';

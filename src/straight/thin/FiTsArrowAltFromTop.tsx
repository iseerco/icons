import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowAltFromTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,1V0H3V1H11.5V17H4.875l5.768,6.387c.345,.39,.84,.613,1.357,.613s1.011-.223,1.356-.611l5.769-6.389h-6.625V1h8.5ZM12.612,22.72l-.003,.003c-.316,.356-.899,.36-1.222-.003l-4.263-4.72h9.75l-4.263,4.72Z"/></svg>
);

FiTsArrowAltFromTop.displayName = 'FiTsArrowAltFromTop';

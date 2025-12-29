import React from 'react';
import type { IconProps } from '../../types';

export const FiTrCurveAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m.5,24c-.276,0-.5-.224-.5-.5s.224-.5.5-.5c5.585,0,10.315-4.752,11.003-11.055C12.246,5.136,17.404,0,23.5,0c.276,0,.5.224.5.5s-.224.5-.5.5c-5.585,0-10.315,4.752-11.003,11.055-.743,6.81-5.901,11.945-11.997,11.945Z"/>
</svg>
);

FiTrCurveAlt.displayName = 'FiTrCurveAlt';

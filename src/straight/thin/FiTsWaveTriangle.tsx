import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWaveTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.94,9.907l-7.119,13.19L7.134,3.098.94,14.59l-.88-.475L7.182.902l9.688,20.001,6.191-11.47.88.475Z"/></svg>

);

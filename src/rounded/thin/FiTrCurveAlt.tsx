import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCurveAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.5,24c-.276,0-.5-.224-.5-.5s.224-.5.5-.5c5.585,0,10.315-4.752,11.003-11.055C12.246,5.136,17.404,0,23.5,0c.276,0,.5.224.5.5s-.224.5-.5.5c-5.585,0-10.315,4.752-11.003,11.055-.743,6.81-5.901,11.945-11.997,11.945Z"/>
</svg>

);

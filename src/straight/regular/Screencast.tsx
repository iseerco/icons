import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screencast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,20.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5ZM0,14v2c3.309,0,6,2.691,6,6h2c0-4.411-3.589-8-8-8ZM21,2H3c-1.654,0-3,1.346-3,3v2h2v-2c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v15h-7v2h9V5c0-1.654-1.346-3-3-3ZM.051,9v2c6.037,0,10.949,4.935,10.949,11h2C13,14.832,7.191,9,.051,9Z"/>
</svg>

);

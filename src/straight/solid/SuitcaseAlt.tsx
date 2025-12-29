import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SuitcaseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,4h-3V2c0-1.103-.897-2-2-2H8c-1.103,0-2,.897-2,2v2H3c-1.654,0-3,1.346-3,3V24H6V8h2V24h8V8h2V24h6V7c0-1.654-1.346-3-3-3Zm-13,0V2h8v2H8Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hexagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12.02c0-.5,.12-1,.37-1.46L4.64,2.59c.52-.97,1.54-1.58,2.64-1.58h9.46c1.11,0,2.12,.61,2.65,1.59l4.25,7.96c.48,.91,.48,1.99,0,2.9l-4.25,7.96c-.52,.98-1.54,1.59-2.65,1.59H7.28c-1.11,0-2.12-.61-2.64-1.58L.37,13.47C.12,13.02,0,12.52,0,12.02Z"/></svg>

);

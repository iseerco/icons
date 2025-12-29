import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AttributionPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H0v-2H19c.55,0,1-.45,1-1s-.45-1-1-1h-3c-1.65,0-3-1.35-3-3s1.35-3,3-3h8v2h-8c-.55,0-1,.45-1,1s.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3ZM7.02,8.44l-4.52,1L.01,18.58l6.01-6.01,1.41,1.41L1.42,19.99l9.13-2.49,1-4.52-4.54-4.54ZM19.19,.74c-.99-.99-2.6-.99-3.59,0l-6.72,6.72,3.59,3.59,6.72-6.72c.48-.48,.74-1.12,.74-1.8s-.26-1.32-.74-1.79Z"/></svg>

);

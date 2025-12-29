import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BangladeshiTakaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,12v2c0,5.51-4.49,10-10,10h-2c-2.21,0-4-1.79-4-4V10H3c-.55,0-1-.45-1-1s.45-1,1-1h3V4c0-1.1-.9-2-2-2h-1c-.55,0-1-.45-1-1s.45-1,1-1h1c2.21,0,4,1.79,4,4v4h3c.55,0,1,.45,1,1s-.45,1-1,1h-3v10c0,1.1,.9,2,2,2h2c4.41,0,8-3.59,8-8v-2c0-1.1-.9-2-2-2h-1c-.55,0-1-.45-1-1s.45-1,1-1h1c2.21,0,4,1.79,4,4Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Paste = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,4h-2c-1.1,0-2-.9-2-2s.9-2,2-2h2c1.1,0,2,.9,2,2s-.9,2-2,2Zm10,5h-4c-2.21,0-4,1.79-4,4v7c0,2.21,1.79,4,4,4h4c2.21,0,4-1.79,4-4v-7c0-2.21-1.79-4-4-4Zm0,10h-4c-.55,0-1-.45-1-1s.45-1,1-1h4c.55,0,1,.45,1,1s-.45,1-1,1Zm0-4h-4c-.55,0-1-.45-1-1s.45-1,1-1h4c.55,0,1,.45,1,1s-.45,1-1,1Zm-4-8h2c0-2.42-1.73-4.42-4.01-4.88-.07,2.15-1.82,3.88-3.99,3.88h-2c-2.17,0-3.94-1.74-3.99-3.9C1.73,2.56,0,4.58,0,7v12c0,2.76,2.24,5,5,5h6.53c-.95-1.06-1.53-2.46-1.53-4v-7c0-3.31,2.69-6,6-6Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,19h-2v-7h-2v-2h2c1.1,0,2,.9,2,2v7Zm-2-14c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm12-2c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3V24H24V3ZM2,3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V22H2V3Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FrancSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,1c0,.55-.45,1-1,1H9c-1.65,0-3,1.35-3,3v6h11c.55,0,1,.45,1,1s-.45,1-1,1H6v4h6c.55,0,1,.45,1,1s-.45,1-1,1H6v4c0,.55-.45,1-1,1s-1-.45-1-1v-4H1c-.55,0-1-.45-1-1s.45-1,1-1h3V5C4,2.24,6.24,0,9,0h12c.55,0,1,.45,1,1Z"/></svg>

);

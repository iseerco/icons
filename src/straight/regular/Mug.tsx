import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,6H19V3h1V1H0V3H1V20a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V17h5V9A3,3,0,0,0,21,6ZM16,21H4a1,1,0,0,1-1-1V8H15V6H3V3H17V20A1,1,0,0,1,16,21Zm6-6H19V8h2a1,1,0,0,1,1,1Z"/></svg>

);

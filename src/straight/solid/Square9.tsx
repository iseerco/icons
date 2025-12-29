import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square9 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-5,13c0,2.757-2.243,5-5,5h-2v-2h2c1.494,0,2.725-1.1,2.953-2.531-.58,.328-1.24,.531-1.953,.531-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4v3Zm-4-1c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>

);

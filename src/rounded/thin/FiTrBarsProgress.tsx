import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBarsProgress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,11H20c2.206,0,4-1.794,4-4s-1.794-4-4-4H4C1.794,3,0,4.794,0,7s1.794,4,4,4ZM23,7c0,1.654-1.346,3-3,3h-4V4h4c1.654,0,3,1.346,3,3ZM4,4H15v6H4c-1.654,0-3-1.346-3-3s1.346-3,3-3ZM20,13H4c-2.206,0-4,1.794-4,4s1.794,4,4,4H20c2.206,0,4-1.794,4-4s-1.794-4-4-4ZM1,17c0-1.654,1.346-3,3-3h5v6H4c-1.654,0-3-1.346-3-3Zm19,3H10v-6h10c1.654,0,3,1.346,3,3s-1.346,3-3,3Z"/></svg>

);

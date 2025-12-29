import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTubes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,0H1v1h1v19c0,2.206,1.794,4,4,4s4-1.794,4-4V1h1V0Zm-5,23c-1.654,0-3-1.346-3-3v-10h6v10c0,1.654-1.346,3-3,3Zm3-14H3V1h6v8Z"/><path d="m23,0h-10v1h1v19c0,2.206,1.794,4,4,4s4-1.794,4-4V1h1V0Zm-2,20c0,1.654-1.346,3-3,3s-3-1.346-3-3v-10h6v10Zm0-11h-6V1h6v8Z"/></svg>

);

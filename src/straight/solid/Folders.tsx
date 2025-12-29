import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Folders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,21v2H0V8c0-1.302,.839-2.402,2-2.816v15.816H20ZM4,9v10H24V9H4Zm20-2v-1c0-1.654-1.346-3-3-3h-5.764L11.236,1H7c-1.654,0-3,1.346-3,3v3H24Z"/></svg>

);

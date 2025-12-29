import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Beer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,13a3,3,0,0,0-3-3H19V8H11v5a3,3,0,0,1-6,0V8H1V21a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V20h4Zm-2,5H19V12h1a1,1,0,0,1,1,1ZM7,6H2A4,4,0,0,1,5.765,2.007a4.515,4.515,0,0,1,7.508.061A4.012,4.012,0,0,1,18,6H9v7a1,1,0,0,1-2,0Z"/></svg>

);

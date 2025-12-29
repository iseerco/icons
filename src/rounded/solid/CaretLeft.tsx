import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.293,18.586,7.707,13a1,1,0,0,1,0-1.414L13.293,6A1,1,0,0,1,15,6.707V17.879A1,1,0,0,1,13.293,18.586Z"/></svg>

);

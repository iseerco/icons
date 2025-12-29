import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Italic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H7A1,1,0,0,0,7,2h5.354L9.627,22H4a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H11.646L14.373,2H20a1,1,0,0,0,0-2Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tubes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,11v9c0,2.206-1.794,4-4,4s-4-1.794-4-4v-9h8Zm-8-2h8V2h1V0H1v2h1v7ZM13,0v2h1v7h8V2h1V0h-10Zm1,11v9c0,2.206,1.794,4,4,4s4-1.794,4-4v-9h-8Z"/></svg>

);

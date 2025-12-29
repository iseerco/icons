import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HelicopterSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,4V6H14V4H6V2h8V1h2V2h8V4Zm0,9h7.931A8.008,8.008,0,0,0,16,6ZM2,6H14v9H24a4,4,0,0,1-4,4H19v2h2a1,1,0,0,0,1-1h2a3,3,0,0,1-3,3H7V21h4V18.65A6,6,0,0,1,7,13V11.754l-7-2V4H2ZM13,19v2h4V19Z"/></svg>

);

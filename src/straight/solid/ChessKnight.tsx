import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKnight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,11H2V9.355A3.266,3.266,0,0,1,4.162,6.3C7.119,5.229,9.112,3.929,9.9.758L10.094,0h.781C21.873,0,22,9.9,22,10V20H5.236C7.392,18.046,10.19,14.858,11,11ZM1,22v2H23V22Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Smog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24H0V22H14Zm6-2H16v2h4Zm4-4H10v2H24ZM8,18H4v2H8Zm6-4H0v2H14Zm6,0H16v2h4Zm-.726-3.221c5.61,1.616,6.579-7.089.752-6.747a5.01,5.01,0,0,0-4.532-2.007,6.042,6.042,0,0,0-9.129.163A5.026,5.026,0,0,0,0,7a5.033,5.033,0,0,0,7.853,4.108,6.1,6.1,0,0,0,5.767.29,5,5,0,0,0,5.654-.619Z"/></svg>

);

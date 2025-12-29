import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Smog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24H0V22H14Zm6-2H16v2h4Zm4-4H10v2H24ZM8,18H4v2H8Zm6-4H0v2H14Zm6,0H16v2h4Zm-.726-3.221A3.5,3.5,0,1,0,20.5,4a3.549,3.549,0,0,0-.474.032,5.01,5.01,0,0,0-4.532-2.007,6,6,0,0,0-9.129.163,5,5,0,1,0,1.488,8.92,6.1,6.1,0,0,0,5.767.29,5,5,0,0,0,5.654-.619ZM13.121,9.392a4.086,4.086,0,0,1-4.674-.313L7.75,8.5l-.644.636A3,3,0,1,1,6.3,4.3l.814.392.472-.771a4,4,0,0,1,6.678-.23l.39.549.655-.155a3.048,3.048,0,0,1,3.366,1.557l.416.814.848-.342A1.5,1.5,0,1,1,20.5,9a1.484,1.484,0,0,1-.853-.267l-.753-.522-.586.705a3.068,3.068,0,0,1-4.068.513l-.547-.4Z"/></svg>

);

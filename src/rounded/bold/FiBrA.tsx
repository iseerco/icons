import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.899,21.958L16.609,3.142c-1.512-4.142-7.711-4.139-9.222,.006L.101,21.958c-.299,.772,.084,1.642,.857,1.941,.773,.299,1.642-.084,1.941-.857l1.953-5.042h14.296l1.953,5.042c.299,.78,1.188,1.154,1.941,.857,.772-.299,1.156-1.168,.857-1.941ZM6.014,15L10.183,4.238c.697-1.668,2.933-1.672,3.632-.006l4.171,10.768H6.014Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsScarecrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.939,9c1.249-.959,2.061-2.512,2.061-4.233v-.767h2v-1h-2v-1c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v1h-2v1h2v1c0,1.397.591,2.741,1.622,3.686.122.112.248.216.378.314H0v1h2v5h3v7h6.5v2h1v-2h6.5v-7h3v-5h2v-1h-9.061Zm-6.939-7c0-.552.448-1,1-1h6c.552,0,1,.448,1,1v1h-8v-1Zm0,3v-1h8v1c0,2.209-1.791,4-4,4s-4-1.791-4-4Zm13,9h-3v7H6v-7h-3v-4h18v4Z"/></svg>

);

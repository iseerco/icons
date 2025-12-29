import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Curling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,18H24a6.006,6.006,0,0,1-6,6H6A6.006,6.006,0,0,1,0,18Zm18-8H6a6.006,6.006,0,0,0-6,6H24A6.006,6.006,0,0,0,18,10ZM6,8H18a7.962,7.962,0,0,1,1.57.157L18.781,5H7.136l.493-2.217A.992.992,0,0,1,8.6,2H17V0H8.6A2.981,2.981,0,0,0,5.676,2.349L4.383,8.165A7.983,7.983,0,0,1,6,8Z"/></svg>

);

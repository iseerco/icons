import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTally = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="24.002 7.165 23.592 6.253 20 7.864 20 0 19 0 19 8.313 15 10.107 15 0 14 0 14 10.556 10 12.35 10 0 9 0 9 12.799 5 14.593 5 0 4 0 4 15.041 .002 16.835 .411 17.747 4 16.137 4 24 5 24 5 15.688 9 13.894 9 24 10 24 10 13.446 14 11.652 14 24 15 24 15 11.203 19 9.409 19 24 20 24 20 8.96 24.002 7.165"/></svg>

);

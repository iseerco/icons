import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,9h6v6H0v-6Zm24,0H8v6h16v-6Zm-16-2h16v-2c0-1.654-1.346-3-3-3h-13v5Zm-2,0V2h-3c-1.654,0-3,1.346-3,3v2h6Zm2,10v5h16v-5H8Zm-2,0H0v5h6v-5Z"/>
</svg>

);

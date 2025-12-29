import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,15H8v-6h16v6ZM8,7h16c0-2.757-2.243-5-5-5h-11v5Zm-2,2H0v6h6v-6Zm2,13h11c2.757,0,5-2.243,5-5H8v5ZM6,2h-1C2.243,2,0,4.243,0,7h6V2Zm0,15H0c0,2.757,2.243,5,5,5h1v-5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPlusMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,9c0-.828.672-1.5,1.5-1.5h6V1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v6h6c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5h-6v6c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-6h-6c-.828,0-1.5-.672-1.5-1.5Zm16.5,12H4.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5h15c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5Z"/></svg>

);

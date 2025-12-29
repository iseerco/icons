import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrH4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,4.5v15c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-6.5H3v6.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V4.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v5.5h6v-5.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5Zm10.5-1.5c-.828,0-1.5.672-1.5,1.5v6.5h-3.5c-.275,0-.5-.225-.5-.5v-6c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v6c0,1.93,1.57,3.5,3.5,3.5h3.5v5.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V4.5c0-.828-.672-1.5-1.5-1.5Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrInformation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm5.5,19.5h-2.5v-11.5c0-2.481-2.019-4.5-4.5-4.5h-1c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h1c.827,0,1.5.673,1.5,1.5v11.5h-2.5c-.829,0-1.5.672-1.5,1.5s.671,1.5,1.5,1.5h8c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/></svg>

);

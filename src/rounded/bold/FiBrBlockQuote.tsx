import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBlockQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,3.5c0-.829.671-1.5,1.5-1.5h21c.829,0,1.5.671,1.5,1.5s-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.671-1.5-1.5Zm22.5,15.5h-14c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h14c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Zm0-9h-14c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h14c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Zm-21,0c-.829,0-1.5.671-1.5,1.5v9c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-9c0-.829-.671-1.5-1.5-1.5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebDesign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,5.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm5.5,1.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm15.5-1v12c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V6C0,3.243,2.243,1,5,1h14c2.757,0,5,2.243,5,5Zm-22,0v2h20v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3Zm12,4H2v4.5h12v-4.5Zm-9,11h9v-4.5H2v1.5c0,1.654,1.346,3,3,3Zm17-3v-8h-6v11h3c1.654,0,3-1.346,3-3Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,8.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm12-2.835v18.335H2V3c0-1.654,1.346-3,3-3h11.381l5.619,5.665Zm-3,10.457l-3,3-4-4-5.879,5.879h12.879v-4.879Zm0-8.121h-5V3H5v14.879l7-7,4,4,3-3v-3.879Z"/></svg>

);

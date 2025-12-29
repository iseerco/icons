import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCatalog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,6h-1.5V0H3.5C1.57,0,0,1.57,0,3.5v14.5h5v6h19v-14.5c0-1.93-1.57-3.5-3.5-3.5Zm-8.117,0l3.617-1.973v1.973h-3.617ZM3,15V3.5c0-.275.225-.5.5-.5h8.118l-6.618,3.609v8.391h-2Zm18,6h-13v-12h12.5c.275,0,.5.225.5.5v11.5Zm-6-5h4v3h-4v-3Zm-5,0h3v3h-3v-3Zm5-5h4v3h-4v-3Zm-5,0h3v3h-3v-3Z"/>
</svg>

);

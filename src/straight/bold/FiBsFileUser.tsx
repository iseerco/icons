import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.382,0H5c-1.654,0-3,1.346-3,3v21h20V5.665L16.382,0Zm.618,21v-2c0-1.105-.895-2-2-2h-6c-1.105,0-2,.895-2,2v2h-2V3h9v5h5v13h-2Zm-2-8c0,1.655-1.345,3-3,3s-3-1.345-3-3,1.345-3,3-3,3,1.345,3,3Z"/>
</svg>

);

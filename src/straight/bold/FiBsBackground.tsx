import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBackground = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.28,.22-.5,.5-.5h5.88L3,9.38V3.5Zm0,10.12L13.62,3h5.26L3,18.88v-5.26Zm18,7.38h-6.38l6.38-6.38v6.38Zm0-10.62l-10.62,10.62H5.12L21,5.12v5.26Z"/></svg>

);

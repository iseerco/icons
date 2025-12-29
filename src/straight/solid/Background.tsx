import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Background = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.17,0L0,14.17v-5.17L9,0h5.17Zm1.83,24l8-8v-6.17l-14.17,14.17h6.17Zm-9,0L24,7V3c0-.46-.11-.89-.3-1.29L1.41,24H7Zm11.83,0h5.17v-5.17l-5.17,5.17ZM6.17,0H3C1.35,0,0,1.35,0,3v3.17L6.17,0ZM0,17v5.59L22.29,.3c-.39-.19-.82-.3-1.29-.3h-4L0,17Z"/></svg>

);

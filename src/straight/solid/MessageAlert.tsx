import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageAlert = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,17v-2h5.935l1.167-2H7v-2H15.268l1.167-2H7v-2h10v1.03l5.595,9.591c.894-1.678,1.405-3.591,1.405-5.621C24,5.383,18.617,0,12,0S0,5.383,0,12v12H7.685l4.083-7H7Z"/>
  <path d="M10,24h14l-7-12-7,12Zm8-1h-2v-2h2v2Zm0-3h-2v-4h2v4Z"/>
</svg>

);

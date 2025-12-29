import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mp3Player = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,5v2s-6,0-6,0v-2h6Zm0,11c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Zm-1.5,0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm7.5-13v21H3V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3Zm-4,13c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm0-11c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h6c1.103,0,2-.897,2-2v-2Z"/></svg>

);

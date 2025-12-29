import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Reel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2V0H0V2H4V22H0v2H24v-2h-4v-5c2.206,0,4-1.794,4-4h-2c0,1.103-.897,2-2,2V2h4Zm-6,9H6v-2h12v2Zm0-4H6v-2h12v2Zm0,12H6v-2h12v2ZM6,15v-2h12v2H6Z"/></svg>

);

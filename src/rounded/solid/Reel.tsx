import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Reel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,17c2.206,0,4-1.794,4-4,0-.553-.447-1-1-1s-1,.447-1,1c0,1.103-.897,2-2,2V2h3c.553,0,1-.447,1-1s-.447-1-1-1H1C.447,0,0,.447,0,1s.447,1,1,1h3V22H1c-.553,0-1,.447-1,1s.447,1,1,1H23c.553,0,1-.447,1-1s-.447-1-1-1h-3v-5Zm-2,2H6v-2h12v2Zm0-8H6v-2h12v2Zm0-4H6v-2h12v2ZM6,15v-2h12v2H6Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Journal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,0H5c-1.654,0-3,1.346-3,3h-1c-.552,0-1,.447-1,1s.448,1,1,1h1v2h-1c-.552,0-1,.447-1,1s.448,1,1,1h1v2h-1c-.552,0-1,.447-1,1s.448,1,1,1h1v2h-1c-.552,0-1,.447-1,1s.448,1,1,1h1v2h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c0,1.654,1.346,3,3,3h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm0,8h-6c-.552,0-1-.447-1-1s.448-1,1-1h6c.552,0,1,.447,1,1s-.448,1-1,1Zm9,16l-1.121-1.121c-.563-.563-.879-1.326-.879-2.121V2c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2v18.757c0,.796-.316,1.559-.879,2.121l-1.121,1.121"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WineBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.01,2.004h-4c-.553,0-1-.448-1-1S9.457.004,10.01.004h4c.553,0,1,.448,1,1s-.447,1-1,1Zm4.328,7.684l-3.328-2.219v-2.465c0-.552-.447-1-1-1h-4c-.553,0-1,.448-1,1v2.465l-3.328,2.219c-1.195.796-2.046,1.976-2.435,3.317h12.763c.552,0,1,.446,1,.999s-.447,1-1,1H3.009v4c0,2.757,2.243,5,5,5h8.001c2.757,0,5-2.243,5-5v-4.324c0-2.011-.999-3.877-2.672-4.992Z"/></svg>

);

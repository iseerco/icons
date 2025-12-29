import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DigitalTachograph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM3,7c0-.552.448-1,1-1h9c.552,0,1,.448,1,1v2c0,.552-.448,1-1,1H4c-.552,0-1-.448-1-1v-2Zm1,5h1c.552,0,1,.447,1,1s-.448,1-1,1h-1c-.552,0-1-.447-1-1s.448-1,1-1Zm6,6h-6c-.552,0-1-.447-1-1s.448-1,1-1h6c.552,0,1,.447,1,1s-.448,1-1,1Zm-1-4h-1c-.552,0-1-.447-1-1s.448-1,1-1h1c.552,0,1,.447,1,1s-.448,1-1,1Zm2-1c0-.553.448-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1h-1c-.552,0-1-.447-1-1Zm9,5h-6c-.553,0-1-.447-1-1s.447-1,1-1h6c.553,0,1,.447,1,1s-.447,1-1,1Z"/>
</svg>

);

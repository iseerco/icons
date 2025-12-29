import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,0h-1c-2.757,0-5,2.243-5,5v9.261c-.952-.787-2.172-1.261-3.5-1.261-3.032,0-5.5,2.467-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.467,5.5-5.5V5c0-1.654,1.346-3,3-3h1c.553,0,1-.448,1-1s-.447-1-1-1ZM0,1C0,.448.447,0,1,0h11c.553,0,1,.448,1,1s-.447,1-1,1H1c-.553,0-1-.448-1-1Zm0,6c0-.552.447-1,1-1h11c.553,0,1,.448,1,1s-.447,1-1,1H1c-.553,0-1-.448-1-1Zm8,6c0,.552-.447,1-1,1H1c-.553,0-1-.448-1-1s.447-1,1-1h6c.553,0,1,.448,1,1Z"/>
</svg>

);

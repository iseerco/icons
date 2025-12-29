import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HardHat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.038,17H1.038c-.552,0-1,.448-1,1H.038c0,.552.448,1,1,1h.477c1.523,1.5,4.523,4,10.523,4s9-2.5,10.523-4h.477c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm-14-2V4c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v11h-6Zm-2,0H1.038v-2.448c0-4.094,2.384-7.769,6-9.579v12.028Zm16-2.448v2.448h-6V2.972c3.616,1.81,6,5.486,6,9.579Z"/>
</svg>

);

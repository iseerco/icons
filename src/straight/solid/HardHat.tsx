import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HardHat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,17H0v2h1.477c1.523,1.5,4.523,4,10.523,4s9-2.5,10.523-4h1.477v-2Zm-15-2V1h6v14h-6Zm-2,0H1v-2.448c0-4.094,2.384-7.769,6-9.579v12.028Zm16-2.448v2.448h-6V2.972c3.616,1.81,6,5.486,6,9.579Z"/>
</svg>

);

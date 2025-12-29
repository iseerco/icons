import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,0h-4.929c-1.602,0-3.108.624-4.243,1.757l-2.07,2.071c-1.134,1.133-1.758,2.64-1.758,4.243v10.929c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3h-8c-1.654,0-3-1.346-3-3v-10.929c0-1.069.416-2.073,1.172-2.829l2.07-2.071c.756-.756,1.761-1.172,2.829-1.172h4.929c1.654,0,3,1.346,3,3v14Zm-2-14v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-.552.447-1,1-1s1,.448,1,1Zm-3,0v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-.552.447-1,1-1s1,.448,1,1Zm-3,0v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-.552.447-1,1-1s1,.448,1,1Z"/>
</svg>

);

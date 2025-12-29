import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,7c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm6.317,6c2.83-1.992,4.683-5.284,4.683-9,0-6.065-4.935-11-11-11S0,5.935,0,12s4.935,11,11,11h13v-2h-6.683ZM2,12C2,7.037,6.038,3,11,3s9,4.037,9,9-4.038,9-9,9S2,16.963,2,12Z"/>
</svg>

);

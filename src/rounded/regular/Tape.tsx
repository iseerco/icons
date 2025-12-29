import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,12c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-8,0c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm15,9h-5.683c2.83-1.992,4.683-5.284,4.683-9,0-6.065-4.935-11-11-11S0,5.935,0,12s4.935,11,11,11h12c.553,0,1-.447,1-1s-.447-1-1-1ZM2,12C2,7.037,6.037,3,11,3s9,4.037,9,9-4.037,9-9,9S2,16.963,2,12Z"/>
</svg>

);

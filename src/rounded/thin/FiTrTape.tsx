import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,12c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Zm-7,0c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm15.5,10h-7.92c3.785-1.741,6.42-5.568,6.42-10,0-6.065-4.935-11-11-11S0,5.935,0,12s4.935,11,11,11h12.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM1,12C1,6.486,5.486,2,11,2s10,4.486,10,10-4.486,10-10,10S1,17.514,1,12Z"/>
</svg>

);

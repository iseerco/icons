import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,8c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm4.58,7c3.785-1.741,6.42-5.568,6.42-10,0-6.065-4.935-11-11-11S0,5.935,0,12s4.935,11,11,11h13v-1h-8.42ZM1,12C1,6.486,5.486,2,11,2s10,4.486,10,10-4.486,10-10,10S1,17.514,1,12Z"/>
</svg>

);

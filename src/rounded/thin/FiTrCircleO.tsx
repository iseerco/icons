import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleO = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,5.75c-2.757,0-5,2.243-5,5v2.5c0,2.757,2.243,5,5,5s5-2.243,5-5v-2.5c0-2.757-2.243-5-5-5Zm4,7.5c0,2.206-1.794,4-4,4s-4-1.794-4-4v-2.5c0-2.206,1.794-4,4-4s4,1.794,4,4v2.5ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z"/></svg>

);

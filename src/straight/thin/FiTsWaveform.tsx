import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWaveform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="14.966 23.835 12 6.041 9.034 23.835 6.008 8.045 3.594 21.027 1.118 12 0 12 0 11 1.882 11 3.406 16.562 5.992 2.654 8.966 18.165 12 -.041 15.034 18.165 18.008 2.654 20.594 16.562 22.118 11 24 11 24 12 22.882 12 20.406 21.027 17.992 8.045 14.966 23.835"/></svg>

);

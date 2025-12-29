import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWineGlassCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,9V0H5V9c0,3.691,2.873,6.725,6.5,6.982v7.018H7v1h10v-1h-4.5v-7.018c3.627-.257,6.5-3.291,6.5-6.982Zm-7,6c-3.309,0-6-2.691-6-6V1h5.261l-2,5h4l-1.726,4.314,.929,.371,2.274-5.686h-4l1.6-4h5.661V9c0,3.309-2.691,6-6,6Z"/></svg>

);

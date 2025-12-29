import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTs6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.946,15.021c-.433-3.632-3.386-6.563-7.023-6.969-2.315-.254-4.532,.447-6.251,1.985-.676,.605-1.238,1.314-1.668,2.093v-3.629c0-4.136,3.364-7.5,7.5-7.5h5.5V0h-5.5C7.817,0,4.004,3.813,4.004,8.5l.004,7.5c0,4.5,3.568,7.8,7.608,7.991,.128,.006,.256,.009,.383,.009,2.222,0,4.34-.917,5.86-2.548,1.607-1.726,2.367-4.069,2.086-6.431Zm-7.946,7.979c-3.866,0-7-3.134-7-7s3.134-7,7-7,7,3.134,7,7-3.134,7-7,7Z"/></svg>

);

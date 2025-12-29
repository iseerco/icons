import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeQuarterTo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,0,1,0,12c0-.367.017-.731.049-1.09l1.992.181Q2,11.54,2,12A10,10,0,1,0,12,2q-.46,0-.909.041L10.91.049C11.269.017,11.633,0,12,0A12.013,12.013,0,0,1,24,12ZM5.663,4.263,4.395,2.717A12.125,12.125,0,0,0,2.715,4.4L4.262,5.665A10.144,10.144,0,0,1,5.663,4.263ZM9.142,2.415,8.571.5a11.984,11.984,0,0,0-2.2.9l.939,1.766A9.951,9.951,0,0,1,9.142,2.415Zm-5.978,4.9L1.4,6.375a12.013,12.013,0,0,0-.9,2.2l1.917.571A9.964,9.964,0,0,1,3.164,7.313ZM11,6v4.277a2,2,0,0,0-.723.723H7v2h3.277A1.994,1.994,0,1,0,13,10.277V6Z"/></svg>

);

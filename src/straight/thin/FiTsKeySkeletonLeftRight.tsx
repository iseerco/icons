import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsKeySkeletonLeftRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0c-2.48,0-4.5,2.02-4.5,4.5v.5H2v5h1V6h3v4h1V6H15v.5c0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5v-2c0-2.48-2.02-4.5-4.5-4.5Zm3.5,6.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-2c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v2Zm-2,11.5h-3v-4h-1v4H9v-.5c0-2.48-2.02-4.5-4.5-4.5S0,15.02,0,17.5v2c0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5v-.5h13v-5h-1v4Zm-13,1.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-2c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v2Z"/></svg>

);

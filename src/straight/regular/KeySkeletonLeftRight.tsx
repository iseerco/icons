import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeySkeletonLeftRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0c-2.76,0-5,2.24-5,5H2v5h2v-3h2v3h2v-3h6c0,2.76,2.24,5,5,5s5-2.24,5-5v-2c0-2.76-2.24-5-5-5Zm3,7c0,1.65-1.35,3-3,3s-3-1.35-3-3v-2c0-1.65,1.35-3,3-3s3,1.35,3,3v2Zm-2,10h-2v-3h-2v3h-6c0-2.76-2.24-5-5-5S0,14.24,0,17v2c0,2.76,2.24,5,5,5s5-2.24,5-5h12v-5h-2v3Zm-12,2c0,1.65-1.35,3-3,3s-3-1.35-3-3v-2c0-1.65,1.35-3,3-3s3,1.35,3,3v2Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeySkeletonLeftRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0c-2.76,0-5,2.24-5,5H5c-1.65,0-3,1.35-3,3v1c0,.55,.45,1,1,1s1-.45,1-1v-1c0-.55,.45-1,1-1h1v2c0,.55,.45,1,1,1s1-.45,1-1v-2h6c0,2.76,2.24,5,5,5s5-2.24,5-5v-2c0-2.76-2.24-5-5-5Zm3,7c0,1.65-1.35,3-3,3s-3-1.35-3-3v-2c0-1.65,1.35-3,3-3s3,1.35,3,3v2Zm-1,7c-.55,0-1,.45-1,1v1c0,.55-.45,1-1,1h-1v-2c0-.55-.45-1-1-1s-1,.45-1,1v2h-6c0-2.76-2.24-5-5-5S0,14.24,0,17v2c0,2.76,2.24,5,5,5s5-2.24,5-5h9c1.65,0,3-1.35,3-3v-1c0-.55-.45-1-1-1Zm-13,5c0,1.65-1.35,3-3,3s-3-1.35-3-3v-2c0-1.65,1.35-3,3-3s3,1.35,3,3v2Z"/></svg>

);

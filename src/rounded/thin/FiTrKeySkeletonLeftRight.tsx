import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrKeySkeletonLeftRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0c-2.48,0-4.5,2.02-4.5,4.5v.5H4.5c-1.38,0-2.5,1.12-2.5,2.5v2c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-2c0-.83,.67-1.5,1.5-1.5h1.5v3.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-3.5H15v.5c0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5v-2c0-2.48-2.02-4.5-4.5-4.5Zm3.5,6.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-2c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v2Zm-1.5,7.5c-.28,0-.5,.22-.5,.5v2c0,.83-.67,1.5-1.5,1.5h-1.5v-3.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v3.5H9v-.5c0-2.48-2.02-4.5-4.5-4.5S0,15.02,0,17.5v2c0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5v-.5h10.5c1.38,0,2.5-1.12,2.5-2.5v-2c0-.28-.22-.5-.5-.5Zm-13.5,5.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-2c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v2Z"/></svg>

);

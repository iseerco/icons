import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVolume = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,5.5a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H5.214L13,23.635V.365L5.214,5.5Zm8,.436V18.064L6.114,15.5H3v-7H6.114Z"/><path d="M15,8.821v7.364a3.682,3.682,0,0,0,0-7.364Z"/><path d="M14.863,3.367v3a6.137,6.137,0,1,1,0,12.273v3a9.137,9.137,0,1,0,0-18.273Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoArrowDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.007v13.985l-3-2.236V7.244l3-2.236Zm-5,1.993v13H0V7c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Zm-8,10.021v-2h-3.586l6.793-6.793-1.414-1.414-6.793,6.793v-3.606h-2v5.021c0,1.103,.897,2,2,2h5Z"/></svg>

);

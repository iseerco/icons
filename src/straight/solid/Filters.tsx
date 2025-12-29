import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Filters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,20l-6-4.5v-3.086L4,5.414V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v2.414l-7,7v7.586Zm-8-6.757L2,6.243v-2.058c-1.161,.414-2,1.514-2,2.816v2.414l7,7v3.086l6,4.5v-4.5l-4-3v-3.257Z"/></svg>

);

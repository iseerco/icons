import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PicpeopleFilled = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.35,2,0,3.35,0,5v14c0,1.65,1.35,3,3,3H21c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3ZM12,6c2.21,0,4,1.79,4,4s-1.79,4-4,4-4-1.79-4-4,1.79-4,4-4Zm6,14H6v-1c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v1Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,4H3c-1.654,0-3,1.346-3,3v13H19V7c0-1.654-1.346-3-3-3Zm-2.5,9h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Zm10.5-7.993v13.985l-3-2.236V7.244l3-2.236Z"/></svg>

);

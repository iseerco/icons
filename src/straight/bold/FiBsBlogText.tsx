import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlogText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,19V7H21v12H3Zm2-10h7v3h-2v5h-3v-5h-2v-3Zm9,0h5v3h-5v-3Zm0,5h5v3h-5v-3Z"/></svg>

);

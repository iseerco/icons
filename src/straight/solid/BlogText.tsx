import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlogText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7v-2c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3v2H0Zm24,2v13H0V9H24Zm-14,3H4v2h2v5h2v-5h2v-2Zm9,4h-7v2h7v-2Zm0-4h-7v2h7v-2Z"/></svg>

);

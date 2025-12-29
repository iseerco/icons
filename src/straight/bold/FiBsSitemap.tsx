import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSitemap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,17v6h-6v-6h1.5v-3.5c0-.28-.22-.5-.5-.5h-5.5v4h1.5v6h-6v-6h1.5v-4H5c-.28,0-.5,.22-.5,.5v3.5h1.5v6H0v-6H1.5v-3.5c0-1.93,1.57-3.5,3.5-3.5h5.5v-3h-1.5V1h6V7h-1.5v3h5.5c1.93,0,3.5,1.57,3.5,3.5v3.5h1.5Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sitemap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,17v-3c0-1.65-1.35-3-3-3h-6V7h2V1h-6V7h2v4H5c-1.65,0-3,1.35-3,3v3H0v6H6v-6h-2v-3c0-.55,.45-1,1-1h6v4h-2v6h6v-6h-2v-4h6c.55,0,1,.45,1,1v3h-2v6h6v-6h-2Z"/></svg>

);

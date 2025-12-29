import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSitemap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,17v-3.5c0-1.38-1.12-2.5-2.5-2.5h-6.5V7h2.5V1h-6V7h2.5v4H5c-1.38,0-2.5,1.12-2.5,2.5v3.5H0v6H6v-6H3.5v-3.5c0-.83,.67-1.5,1.5-1.5h6.5v5h-2.5v6h6v-6h-2.5v-5h6.5c.83,0,1.5,.67,1.5,1.5v3.5h-2.5v6h6v-6h-2.5ZM10,6V2h4V6h-4Zm-5,12v4H1v-4H5Zm9,0v4h-4v-4h4Zm9,4h-4v-4h4v4Z"/></svg>

);

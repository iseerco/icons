import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPesetaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,7h-2.02c-.26-3.9-3.52-7-7.48-7H6.5c-1.38,0-2.5,1.12-2.5,2.5V7H2v1h2V24h1V15h7.5c3.97,0,7.22-3.1,7.48-7h2.02v-1ZM5,2.5c0-.83,.67-1.5,1.5-1.5h6c3.42,0,6.22,2.65,6.48,6H5V2.5Zm7.5,11.5H5v-6h13.98c-.26,3.35-3.07,6-6.48,6Z"/></svg>

);

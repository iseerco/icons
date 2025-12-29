import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrObjectUnion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,24h-6c-3.03,0-5.5-2.47-5.5-5.5v-1.5h-1.5c-3.03,0-5.5-2.47-5.5-5.5V5.5C0,2.47,2.47,0,5.5,0h6c3.03,0,5.5,2.47,5.5,5.5v1.5h1.5c3.03,0,5.5,2.47,5.5,5.5v6c0,3.03-2.47,5.5-5.5,5.5ZM5.5,3c-1.38,0-2.5,1.12-2.5,2.5v6c0,1.38,1.12,2.5,2.5,2.5h3c.83,0,1.5,.67,1.5,1.5v3c0,1.38,1.12,2.5,2.5,2.5h6c1.38,0,2.5-1.12,2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5h-3c-.83,0-1.5-.67-1.5-1.5v-3c0-1.38-1.12-2.5-2.5-2.5H5.5Z"/></svg>

);

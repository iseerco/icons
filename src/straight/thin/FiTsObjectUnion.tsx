import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsObjectUnion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H8v-8H0V2.5C0,1.12,1.12,0,2.5,0H13.5c1.38,0,2.5,1.12,2.5,2.5v5.5h5.5c1.38,0,2.5,1.12,2.5,2.5v13.5Zm-15-1h14V10.5c0-.83-.67-1.5-1.5-1.5h-6.5V2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5V15H9v8Z"/></svg>

);

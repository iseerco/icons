import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsH2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,4h3v16h-3v-7H3v7H0V4h3v6h6v-6Zm10.562,11.636c1.978-1.585,4.438-3.558,4.438-6.636,0-2.757-2.243-5-5-5s-5,2.243-5,5h3c0-1.103.897-2,2-2s2,.897,2,2c0,1.638-1.61,2.929-3.314,4.295-1.812,1.452-3.686,2.953-3.686,5.205v1.5h10v-3h-6.047c.462-.445,1.04-.908,1.609-1.364Z"/></svg>

);

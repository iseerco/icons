import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.259,2.404L12-.002l-7.259,2.407c-1.64.543-2.741,2.068-2.741,3.796v5.763c0,6.566,7.005,10.577,9.151,11.648l.806.404.836-.336c2.16-.87,9.207-4.285,9.207-11.717v-5.763c0-1.728-1.102-3.253-2.741-3.797Zm-3.11,11.822l-1.414,1.414-2.734-2.734-2.734,2.734-1.414-1.414,2.734-2.734-2.734-2.734,1.414-1.414,2.734,2.734,2.734-2.734,1.414,1.414-2.734,2.734,2.734,2.734Z"/>
</svg>

);

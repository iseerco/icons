import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAnkh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,15h-5.812c1.578-1.69,4.812-5.567,4.812-9,0-3.309-2.691-6-6-6s-6,2.691-6,6c0,3.433,3.233,7.31,4.812,9h-5.812v1h6.5v8h1v-8h6.5v-1ZM12,1c2.757,0,5,2.243,5,5,0,3.408-3.817,7.583-5,8.793-1.183-1.211-5-5.386-5-8.793,0-2.757,2.243-5,5-5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAnkh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,15h-5.312c1.578-1.69,4.812-5.567,4.812-9,0-3.309-2.691-6-6-6s-6,2.691-6,6c0,3.433,3.233,7.31,4.812,9h-5.312c-.276,0-.5.224-.5.5s.224.5.5.5h6v7.5c0,.276.224.5.5.5s.5-.224.5-.5v-7.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM12,1c2.757,0,5,2.243,5,5,0,3.408-3.817,7.583-5,8.793-1.183-1.211-5-5.386-5-8.793,0-2.757,2.243-5,5-5Z"/>
</svg>

);

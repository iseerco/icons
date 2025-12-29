import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LockOpenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0c-3.033,0-5.5,2.468-5.5,5.5v2.5H0v13c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3v-13h-3v-2.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5h2c0-3.032-2.467-5.5-5.5-5.5Zm-8.5,18h-2v-4h2v4Z"/>
</svg>

);

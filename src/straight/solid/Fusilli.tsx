import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fusilli = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,3h0c0,1.657-1.343,3-3,3h0v1c0,1.657-1.343,3-3,3V3c0-1.657,1.343-3,3-3V3h3Zm-11,5v7c1.657,0,3-1.343,3-3V5c-1.657,0-3,1.343-3,3Zm-5,4v7c1.657,0,3-1.343,3-3v-7c-1.657,0-3,1.343-3,3ZM0,21H0c0-1.657,1.343-3,3-3h0v-1c0-1.657,1.343-3,3-3v7c0,1.657-1.343,3-3,3v-3H0Z"/>
</svg>

);

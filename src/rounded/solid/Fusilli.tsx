import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fusilli = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,9v7c0,1.657-1.343,3-3,3v-7c0-1.657,1.343-3,3-3Zm2-1v7c1.657,0,3-1.343,3-3V5c-1.657,0-3,1.343-3,3ZM23,3h-2V1c0-1-1-1-1-1-1.243,0-2,1.007-2,2.25v7.75c1.657,0,3-1.343,3-3v-1h.75c1.243,0,2.25-.757,2.25-2,0,0,0-1-1-1ZM1,21H3v2c0,1,1,1,1,1,1.243,0,2-1.007,2-2.25v-7.75c-1.657,0-3,1.343-3,3v1h-.75c-1.243,0-2.25,.757-2.25,2,0,0,0,1,1,1Z"/>
</svg>

);

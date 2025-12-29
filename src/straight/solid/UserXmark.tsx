import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm3,2h-6c-2.757,0-5,2.243-5,5v5h16v-5c0-2.757-2.243-5-5-5Zm9.914-2.5l2.793,2.793-1.414,1.414-2.793-2.793-2.793,2.793-1.414-1.414,2.793-2.793-2.793-2.793,1.414-1.414,2.793,2.793,2.793-2.793,1.414,1.414-2.793,2.793Z"/>
</svg>

);

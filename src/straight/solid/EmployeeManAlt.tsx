import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EmployeeManAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12c-3.309,0-6-2.691-6-6S8.691,0,12,0s6,2.691,6,6-2.691,6-6,6Zm-2.667,2h-1.333c-2.757,0-5,2.243-5,5v5h7l1.385-6.923-2.051-3.077Zm6.667,0h-1.333l-2.051,3.077,1.385,6.923h7v-5c0-2.757-2.243-5-5-5Z"/>
</svg>

);

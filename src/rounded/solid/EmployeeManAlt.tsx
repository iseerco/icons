import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EmployeeManAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12c-3.309,0-6-2.691-6-6S8.691,0,12,0s6,2.691,6,6-2.691,6-6,6Zm2.714,2.42l-1.843,2.77,1.86,6.81h5.269c.553,0,1-.448,1-1,0-4.017-2.646-7.426-6.286-8.58Zm-3.586,2.77l-1.843-2.77c-3.64,1.154-6.286,4.563-6.286,8.58,0,.552.448,1,1,1h5.269l1.86-6.81Z"/>
</svg>

);

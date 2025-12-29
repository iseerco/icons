import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCrown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,20.5v3.5h-2v-3.5c0-1.379-1.122-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.121-2.5,2.5v3.5h-2v-3.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5ZM6,8V0l3,3,3-3,3,3,3-3v8c0,3.309-2.691,6-6,6s-6-2.691-6-6Zm2-1v1c0,2.206,1.794,4,4,4s4-1.794,4-4v-1h-8Z"/>
</svg>

);

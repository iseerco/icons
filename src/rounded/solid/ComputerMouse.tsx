import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ComputerMouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,10h-7c0-3.86,3.14-7,7-7v7Zm-7,6c0,4.411,3.589,8,8,8s8-3.589,8-8v-4H4v4Zm16-6c0-3.86-3.141-7-7-7v7h7ZM13,1c0-.552-.448-1-1-1s-1,.448-1,1v2h2V1Z"/>
</svg>

);

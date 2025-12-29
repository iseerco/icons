import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoveToFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.9,7H0v-1C0,3.24,2.24,1,5,1h2.53c.46,0,.93,.11,1.34,.32l3.16,1.58c.14,.07,.29,.11,.45,.11h6.53c2.41,0,4.43,1.72,4.9,4Zm.1,2v9c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V9H24Zm-8.48,10.71l1.61-1.61c.58-.58,.87-1.34,.87-2.09s-.29-1.52-.87-2.09l-1.61-1.61c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l1.29,1.29H7c-.55,0-1,.45-1,1s.45,1,1,1H15.4l-1.29,1.29c-.39,.39-.39,1.02,0,1.41s1.02,.39,1.41,0Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SidebarFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,22H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2H13V22ZM24,7v10c0,2.757-2.243,5-5,5h-4V2h4c2.757,0,5,2.243,5,5Zm-3,8c0-.553-.448-1-1-1h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c.552,0,1-.447,1-1Zm0-4c0-.553-.448-1-1-1h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c.552,0,1-.447,1-1Zm0-4c0-.553-.448-1-1-1h-1c-.552,0-1,.447-1,1s.448,1,1,1h1c.552,0,1-.447,1-1Z"/></svg>

);

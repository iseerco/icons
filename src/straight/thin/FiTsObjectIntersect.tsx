import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsObjectIntersect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,16H8v-5.5c0-1.38,1.12-2.5,2.5-2.5h5.5v8Zm-7-1h6v-6h-4.5c-.83,0-1.5,.67-1.5,1.5v4.5Zm-3,0H1v-3H0v4H6v-1ZM16,2.5c0-1.38-1.12-2.5-2.5-2.5h-1.5V1h1.5c.83,0,1.5,.67,1.5,1.5v3.5h1V2.5ZM10,0H6V1h4V0ZM1,2.5c0-.83,.67-1.5,1.5-1.5h1.5V0h-1.5C1.12,0,0,1.12,0,2.5v1.5H1v-1.5Zm0,3.5H0v4H1V6ZM12,23h-3v-5h-1v6h4v-1Zm6,0h-4v1h4v-1Zm6-9h-1v4h1v-4Zm0-3.5c0-1.38-1.12-2.5-2.5-2.5h-3.5v1h3.5c.83,0,1.5,.67,1.5,1.5v1.5h1v-1.5Zm0,9.5h-1v3h-3v1h4v-4Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ConciergeBell = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,21H13v-2h7.343c1.465,0,2.657-1.192,2.657-2.657,0-5.88-4.371-10.79-10-11.298V3h1c.552,0,1-.448,1-1s-.448-1-1-1h-4c-.552,0-1,.448-1,1s.448,1,1,1h1v2.044C5.371,5.553,1,10.462,1,16.343c0,1.465,1.192,2.657,2.657,2.657h7.343v2H1c-.552,0-1,.448-1,1s.448,1,1,1H23c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ConciergeBell = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,21v-2h10v-3c0-5.728-4.401-10.447-10-10.954V3h2V1h-6V3h2v2.046C5.401,5.553,1,10.272,1,16v3H11v2H0v2H24v-2H13ZM3,16c0-4.962,4.038-9,9-9s9,4.038,9,9v1H3v-1Z"/></svg>

);

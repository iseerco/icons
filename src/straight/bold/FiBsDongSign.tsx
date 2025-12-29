import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDongSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,21v3H2v-3H22ZM6,13c0-3.31,2.69-6,6-6,1.09,0,2.12,.29,3,.81v-2.81h-4V2h4V0h3V2h2v3h-2v14h-3v-.81c-.88,.51-1.91,.81-3,.81-3.31,0-6-2.69-6-6Zm3,0c0,1.65,1.35,3,3,3s3-1.35,3-3-1.35-3-3-3-3,1.35-3,3Z"/></svg>

);

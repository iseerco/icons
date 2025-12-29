import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KipSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,14H8.85l12.5,10h-3.2L7,15.08v8.92h-2V14H2v-2h3V0h2V10.7L18.46,0h2.93L8.54,12h13.46v2Z"/></svg>

);

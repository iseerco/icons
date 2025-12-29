import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DongSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,22v2H2v-2H22ZM6,14c0-3.31,2.69-6,6-6,1.54,0,2.94,.59,4,1.54V4h-5V2h5V0h2V2h2v2h-2V20h-2v-1.54c-1.06,.95-2.46,1.54-4,1.54-3.31,0-6-2.69-6-6Zm2,0c0,2.21,1.79,4,4,4s4-1.79,4-4-1.79-4-4-4-4,1.79-4,4Z"/></svg>

);

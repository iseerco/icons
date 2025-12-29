import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Envelopes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,21v2H0V7c0-1.3,.84-2.4,2-2.82V21H20ZM11.88,9.12c1.17,1.17,3.07,1.17,4.24,0l7.11-7.11c-.55-.62-1.34-1.01-2.23-1.01H7c-.89,0-1.68,.4-2.23,1.01l7.11,7.11Zm5.66,1.41c-.97,.97-2.26,1.46-3.54,1.46s-2.56-.49-3.54-1.46L4,4.07v14.93H24V4.07l-6.46,6.46Z"/></svg>

);

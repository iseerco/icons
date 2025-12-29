import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHeartHalfStroke = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.05,2.98c-1.23-1.28-2.94-1.98-4.85-1.98h0c-2.06,.04-3.99,1.05-5.2,2.69-1.22-1.63-3.14-2.65-5.23-2.69-1.88,0-3.59,.71-4.83,1.99C.63,4.34-.07,6.28,0,8.24c0,6.6,9.99,13.91,11.12,14.73l.87,.62,.87-.62c.45-.32,11.13-7.96,11.13-14.64,.08-2.04-.63-3.98-1.94-5.34ZM13,19.09V9c0-1.44,1.15-3.12,1.15-3.12,.63-1.13,1.82-1.86,3.09-1.88,1.07,0,1.99,.37,2.66,1.07,.75,.78,1.15,1.92,1.1,3.21,0,3.25-4.35,7.85-8,10.82Z"/></svg>

);

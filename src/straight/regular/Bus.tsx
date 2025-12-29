import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,10V4.229a2.986,2.986,0,0,0-1.822-2.76c-3.673-1.9-12.694-1.893-16.357,0A2.986,2.986,0,0,0,2,4.229V10H0v3a2,2,0,0,0,2,2v7H4v2H9V22h6v2h5V22h2V15a2,2,0,0,0,2-2V10Zm-9,3V7h7v6ZM4,13V7h7v6Zm.6-9.688A19.013,19.013,0,0,1,12,2a19,19,0,0,1,7.4,1.312.988.988,0,0,1,.6.917V5H4V4.229A.989.989,0,0,1,4.6,3.312ZM4,20V15H6v1a1,1,0,0,0,2,0V15h8v1a1,1,0,0,0,2,0V15h2v5Z"/></svg>

);

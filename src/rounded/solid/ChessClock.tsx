import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,5h1a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2H7V3H8A1,1,0,0,0,8,1H4A1,1,0,0,0,4,3H5V5a5.006,5.006,0,0,0-5,5v6a5,5,0,0,0,3,4.576V22a1,1,0,0,0,2,0V21H19v1a1,1,0,0,0,2,0V20.576A5,5,0,0,0,24,16V10A5.006,5.006,0,0,0,19,5ZM8,14.5h2.837a3.5,3.5,0,1,1,0-2H8a1,1,0,0,0,0,2Zm8.146.061,2.007,2.006a3.5,3.5,0,1,1,1.414-1.414l-2.006-2.007a1,1,0,0,0-1.415,1.415Z"/></svg>

);

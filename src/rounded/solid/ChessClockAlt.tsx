import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessClockAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,10v6a5,5,0,0,0,3,4.576V22a1,1,0,0,0,2,0V21H19v1a1,1,0,0,0,2,0V20.576A5,5,0,0,0,24,16V10a5.006,5.006,0,0,0-5-5V3h1a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2h1V5H8A1,1,0,0,0,8,3H4A1,1,0,0,0,4,5H5A5.006,5.006,0,0,0,0,10Zm17,3.5a1,1,0,0,0-1-1H13.163a3.5,3.5,0,1,1,0,2H16A1,1,0,0,0,17,13.5Zm-9.146-.354a1,1,0,0,0-1.415,0L4.433,15.153a3.5,3.5,0,1,1,1.414,1.414l2.007-2.006A1,1,0,0,0,7.854,13.146Z"/></svg>

);

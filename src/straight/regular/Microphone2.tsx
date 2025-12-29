import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Microphone2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,12a1,1,0,0,1-1,1H4.069a7.993,7.993,0,0,0,15.862,0H15a1,1,0,0,1,0-2h5V9H15a1,1,0,0,1,0-2h4.931A7.993,7.993,0,0,0,4.069,7H9A1,1,0,0,1,9,9H4v2H9A1,1,0,0,1,10,12Z"/><path d="M23,12a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9H11a9.011,9.011,0,0,1-9-9,1,1,0,0,0-2,0A11.013,11.013,0,0,0,11,24h2A11.013,11.013,0,0,0,24,13,1,1,0,0,0,23,12Z"/></svg>

);

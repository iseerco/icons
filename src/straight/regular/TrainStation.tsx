import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainStation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,20v-10.5c0-1.93-1.57-3.5-3.5-3.5h-8c-1.93,0-3.5,1.57-3.5,3.5v10.5h2v2h-2v2h15v-2h-2.5v-2h2.5Zm-13-2v-3h2v2h2v-2h3v2h2v-2h2v3h-11Zm6.5-9h4.414c.055.156.086.325.086.5v3.5h-4.5v-4Zm-6.414,0h4.414v4h-4.5v-3.5c0-.175.031-.344.086-.5Zm8.414,13h-6.5v-2h6.5v2ZM2,18V2h3v2h8V0H0v24h6v-4h1v-2H2Zm2,4h-2v-2h2v2Z"/>
</svg>

);

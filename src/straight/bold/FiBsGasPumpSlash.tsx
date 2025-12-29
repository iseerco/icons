import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGasPumpSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.033,20.912A3.485,3.485,0,0,0,24,18.5V5.914a2.519,2.519,0,0,0-.732-1.768L19.561.439,17.439,2.561,19,4.121V6.5a2.5,2.5,0,0,0,2,2.45V18.5a.491.491,0,0,1-.092.287L16,13.879V3.5A3.5,3.5,0,0,0,12.5,0h-9A3.507,3.507,0,0,0,2.325.2L2.061-.061-.061,2.061l22,22,2.122-2.122ZM12.5,3a.5.5,0,0,1,.5.5V9H11.121l-6-6ZM13,19.363l3,3V24H0V6.364L5.636,12H3v9H13Z"/></svg>

);

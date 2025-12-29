import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,6.5c0,.276-.224.5-.5.5h-6.6c-1.048,0-1.9.852-1.9,1.9v3.1h6.5c.276,0,.5.224.5.5s-.224.5-.5.5h-6.5v4.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-8.6c0-1.599,1.301-2.9,2.9-2.9h6.6c.276,0,.5.224.5.5Zm7,5.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"/></svg>

);

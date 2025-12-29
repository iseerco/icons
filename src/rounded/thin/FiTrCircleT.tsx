import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.75,7c0,.276-.224.5-.5.5h-4.75v10.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5V7.5h-4.75c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h10.5c.276,0,.5.224.5.5Zm6.25,5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"/></svg>

);

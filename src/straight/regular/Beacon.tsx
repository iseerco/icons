import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Beacon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12h12V12C24,5.38,18.62,0,12,0Zm10,22H12c-5.51,0-10-4.49-10-10S6.49,2,12,2s10,4.49,10,10v10Z"/></svg>

);

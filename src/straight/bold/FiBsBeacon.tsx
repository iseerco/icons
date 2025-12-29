import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBeacon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12h12V12C24,5.38,18.62,0,12,0Zm9,21H12c-4.96,0-9-4.04-9-9S7.04,3,12,3s9,4.04,9,9v9Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBeacon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12h12V12C24,5.38,18.62,0,12,0Zm11,23H12c-6.07,0-11-4.93-11-11S5.93,1,12,1s11,4.93,11,11v11Z"/></svg>

);

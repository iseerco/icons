import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Z"/><path d="M10.5,11.055l-2.4,1.5a1.5,1.5,0,0,0-.475,2.068h0a1.5,1.5,0,0,0,2.068.475l2.869-1.8a2,2,0,0,0,.938-1.7V7.772a1.5,1.5,0,0,0-1.5-1.5h0a1.5,1.5,0,0,0-1.5,1.5Z"/></svg>

);

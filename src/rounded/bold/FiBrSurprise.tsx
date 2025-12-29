import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSurprise = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12.013,12.013,0,0,1,0,12C.6-3.9,23.4-3.894,24,12A12.013,12.013,0,0,1,12,24ZM12,3a9.01,9.01,0,0,0-9,9c.452,11.923,17.55,11.92,18,0A9.01,9.01,0,0,0,12,3Zm0,10a3,3,0,0,0,0,6A3,3,0,0,0,12,13ZM8,7a2,2,0,0,0,0,4A2,2,0,0,0,8,7Zm8,0a2,2,0,0,0,0,4A2,2,0,0,0,16,7Z"/></svg>

);

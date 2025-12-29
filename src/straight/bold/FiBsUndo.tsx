import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUndo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,6H11.169V.211L1.1,8.953l-.078.072a3.507,3.507,0,0,0,0,4.95l10.147,8.814V17H14.5A6.507,6.507,0,0,1,21,23.476h0V24h3V15.5A9.511,9.511,0,0,0,14.5,6Zm0,8H8.169v2.211L3.12,11.828a.5.5,0,0,1,0-.656L8.169,6.789V9H14.5A6.508,6.508,0,0,1,21,15.5v1.078A9.466,9.466,0,0,0,14.5,14Z"/></svg>

);

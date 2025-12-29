import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrClipboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.5,2h-.35c-.563-1.179-1.756-2-3.15-2h-2c-1.394,0-2.587.821-3.15,2h-.35c-3.032,0-5.5,2.467-5.5,5.5v11c0,3.033,2.468,5.5,5.5,5.5h9c3.032,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.468-5.5-5.5-5.5Zm2.5,16.5c0,1.378-1.121,2.5-2.5,2.5H7.5c-1.379,0-2.5-1.122-2.5-2.5V7.5c0-1.378,1.121-2.5,2.5-2.5h.35c.563,1.179,1.756,2,3.15,2h2c1.394,0,2.587-.821,3.15-2h.35c1.379,0,2.5,1.122,2.5,2.5v11Z"/></svg>

);

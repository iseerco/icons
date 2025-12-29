import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLuggageRolling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,7H18V3.5A3.5,3.5,0,0,0,14.5,0h-5A3.5,3.5,0,0,0,6,3.5V7H3.5A3.5,3.5,0,0,0,0,10.5V22H2v2H5V22H19v2h3V22h2V10.5A3.5,3.5,0,0,0,20.5,7ZM9,3.5A.5.5,0,0,1,9.5,3h5a.5.5,0,0,1,.5.5V7H9Zm-6,7a.5.5,0,0,1,.5-.5h17a.5.5,0,0,1,.5.5V19H3ZM7,12H17v3H7Z"/></svg>

);

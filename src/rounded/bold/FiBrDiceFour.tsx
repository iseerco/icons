import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDiceFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5A5.507,5.507,0,0,0,0,5.5v13A5.507,5.507,0,0,0,5.5,24h13A5.507,5.507,0,0,0,24,18.5V5.5A5.507,5.507,0,0,0,18.5,0ZM21,18.5A2.5,2.5,0,0,1,18.5,21H5.5A2.5,2.5,0,0,1,3,18.5V5.5A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5ZM9,7.5A1.5,1.5,0,1,1,7.5,6,1.5,1.5,0,0,1,9,7.5Zm9,0A1.5,1.5,0,1,1,16.5,6,1.5,1.5,0,0,1,18,7.5Zm-9,9A1.5,1.5,0,1,1,7.5,15,1.5,1.5,0,0,1,9,16.5Zm9,0A1.5,1.5,0,1,1,16.5,15,1.5,1.5,0,0,1,18,16.5Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,15h4v2H10Zm10-2.292V19a5.006,5.006,0,0,1-5,5H9a5.006,5.006,0,0,1-5-5V12.708A4.976,4.976,0,0,1,7.144,8.065L9,7.323V2A1,1,0,0,1,9,0h6a1,1,0,0,1,0,2V7.323l1.856.742A4.977,4.977,0,0,1,20,12.708ZM16,14a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1Z"/></svg>

);

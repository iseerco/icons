import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5V3H15V5H7V3H9V1H3V3H5V5H3A3,3,0,0,0,0,8V21H2v2H4V21H20v2h2V21h2V8A3,3,0,0,0,21,5ZM10.843,14.482a3.5,3.5,0,1,1,.022-1.894L8,13.54Zm8.68.752L17,14l1.169,2.558A3.456,3.456,0,0,1,16.5,17,3.5,3.5,0,1,1,20,13.5,3.465,3.465,0,0,1,19.523,15.234Z"/></svg>

);

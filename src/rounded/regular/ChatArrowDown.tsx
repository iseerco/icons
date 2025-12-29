import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChatArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.293,12.7l-1.086,1.086h0L17.622,10.2a3.073,3.073,0,0,0-4.242,0l-.173.173a1.023,1.023,0,0,1-1.414,0L6.72,5.294A1,1,0,1,0,5.306,6.708l5.072,5.073a3.072,3.072,0,0,0,4.242,0l.173-.173a1.023,1.023,0,0,1,1.414,0L19.793,15.2h0l-1.086,1.086a1,1,0,0,0,.707,1.707H22.5a1.5,1.5,0,0,0,1.5-1.5V13.4A1,1,0,0,0,22.293,12.7Z"/><path d="M23,21.976H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V18.976a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z"/></svg>

);

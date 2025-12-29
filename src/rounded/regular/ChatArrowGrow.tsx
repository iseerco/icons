import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChatArrowGrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,3.976H19.414a1,1,0,0,0-.707,1.707l1.086,1.086h0l-3.586,3.585a1.024,1.024,0,0,1-1.415,0l-.17-.171a3.071,3.071,0,0,0-4.243,0l-5.1,5.1A1,1,0,1,0,6.7,16.7l5.1-5.1a1.023,1.023,0,0,1,1.415,0l.17.171a3.073,3.073,0,0,0,4.243,0l3.586-3.586h0l1.086,1.086A1,1,0,0,0,24,8.562V5.476A1.5,1.5,0,0,0,22.5,3.976Z"/><path d="M23,21.976H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V18.976a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z"/></svg>

);

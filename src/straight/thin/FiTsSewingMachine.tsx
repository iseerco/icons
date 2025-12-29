import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSewingMachine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.985,18.5h.015V4.5c0-1.379-1.122-2.5-2.5-2.5h-1.5V0h-1V2H5V0h-1V2h-.5c-1.378,0-2.5,1.121-2.5,2.5V14.062h3v1.938h1v-1.938h3v-5.062h6v9H2.5c-1.378,0-2.5,1.121-2.5,2.5v3.5H24v-3.5c0-.821-.403-1.544-1.015-2ZM7,8v5.062H2V4.5c0-.827,.673-1.5,1.5-1.5H20.5c.827,0,1.5,.673,1.5,1.5v13.551c-.162-.033-.329-.051-.5-.051h-6.5V8H7Zm16,15H1v-2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v2.5Zm-4.5-6c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.551,0,1,.448,1,1s-.449,1-1,1-1-.448-1-1,.449-1,1-1Zm0-2c1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2,.897,2,2,2Zm0-3c.551,0,1,.448,1,1s-.449,1-1,1-1-.448-1-1,.449-1,1-1Z"/>
</svg>

);

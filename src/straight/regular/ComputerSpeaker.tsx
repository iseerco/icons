import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ComputerSpeaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2,15h8v6h-5v-2h3v-2H0V3C0,1.346,1.346,0,3,0h15c1.654,0,3,1.346,3,3v1h-2v-1c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v12Zm16-2c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm0,2c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm6-6.5v15.5h-12v-15.5c0-1.378,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5Zm-2,0c0-.276-.225-.5-.5-.5h-7c-.275,0-.5.224-.5.5v13.5h8v-13.5Z"/></svg>

);

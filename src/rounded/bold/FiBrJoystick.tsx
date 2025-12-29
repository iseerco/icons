import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrJoystick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,16h-1v-1.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v1.5h-2.5v-6c0-.085-.011-.166-.025-.247,2.036-.632,3.525-2.509,3.525-4.753,0-2.761-2.239-5-5-5s-5,2.239-5,5c0,2.244,1.489,4.121,3.525,4.753-.013.081-.025.162-.025.247v6h-6.5c-2.206,0-4,1.794-4,4s1.794,4,4,4h16c2.206,0,4-1.794,4-4s-1.794-4-4-4ZM12,3c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm8,18H4c-.552,0-1-.449-1-1s.448-1,1-1h16c.552,0,1,.449,1,1s-.448,1-1,1Z"/></svg>

);

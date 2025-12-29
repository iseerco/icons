import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCakeBirthday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,12.5A3.5,3.5,0,0,0,18.5,9h-5V7.006A2.993,2.993,0,0,0,15,4.423c0-1.257-1.211-2.67-1.933-3.4L12-.057,10.933,1.022C10.211,1.753,9,3.166,9,4.423a2.993,2.993,0,0,0,1.5,2.583V9h-5A3.5,3.5,0,0,0,2,12.5V21H0v3H24V21H22ZM5,15.693A2.922,2.922,0,0,0,6.282,16a2.764,2.764,0,0,0,2.833-2.5A2.779,2.779,0,0,0,11.949,16a2.764,2.764,0,0,0,2.833-2.5A2.778,2.778,0,0,0,17.615,16,2.928,2.928,0,0,0,19,15.64V21H5Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,24c-.276,0-.5-.224-.5-.5V4.5C2,2.019,4.019,0,6.5,0H14.5c9.929,.353,9.922,14.65,0,15H3v8.5c0,.276-.224,.5-.5,.5Zm.5-10H14.5c8.592-.274,8.586-12.729,0-13H6.5c-1.93,0-3.5,1.57-3.5,3.5V14Z"/></svg>

);

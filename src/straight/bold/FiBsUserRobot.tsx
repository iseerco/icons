import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserRobot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,21.5v2.5h-3v-2.5c0-.827-.673-1.5-1.5-1.5H7.5c-.827,0-1.5.673-1.5,1.5v2.5h-3v-2.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5Zm1-15.5v5h-2v4H4v-4h-2v-5h2v-.5c0-1.93,1.57-3.5,3.5-3.5h3V0h3v2h3c1.93,0,3.5,1.57,3.5,3.5v.5h2Zm-5-.5c0-.275-.224-.5-.5-.5H7.5c-.276,0-.5.225-.5.5v6.5h10v-6.5Zm-7.5,1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm5,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Z"/></svg>

);

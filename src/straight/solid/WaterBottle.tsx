import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaterBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,15a2.981,2.981,0,0,0,.78,2H16v2H4.78A2.981,2.981,0,0,0,4,21v3H20V20a2.981,2.981,0,0,0-.78-2A2.981,2.981,0,0,0,20,16V13a2.981,2.981,0,0,0-.78-2A2.981,2.981,0,0,0,20,9V8.031a2.985,2.985,0,0,0-1.886-2.785L15,4V2h1V0H8V2H9V4L5.885,5.246A2.986,2.986,0,0,0,4,8.031V8a2.981,2.981,0,0,0,.78,2H16v2H4.78A2.981,2.981,0,0,0,4,14Z"/></svg>

);

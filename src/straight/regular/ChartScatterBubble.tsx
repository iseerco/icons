import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartScatterBubble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H3c-1.65,0-3-1.35-3-3V0H2V21c0,.55,.45,1,1,1H24v2Zm-1-20.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Zm-2,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm1,10c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Zm-2,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm-7-6.5c0-1.65-1.35-3-3-3s-3,1.35-3,3,1.35,3,3,3,3-1.35,3-3Zm-1,9c0-1.65-1.35-3-3-3s-3,1.35-3,3,1.35,3,3,3,3-1.35,3-3Z"/></svg>

);

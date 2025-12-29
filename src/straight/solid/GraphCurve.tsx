import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraphCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,7h1.025l-2.275,2.275,1.414,1.414,3.25-3.25c.78-.779.78-2.049.009-2.818l-3.207-3.293-1.433,1.395,2.218,2.277h-1.001c-8.114,0-15.418,5.411-18,12.495V0H0v24h24v-2H3.058c.592-8.098,8.243-15,16.942-15Z"/>
</svg>

);

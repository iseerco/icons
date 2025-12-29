import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartGantt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H3c-1.65,0-3-1.35-3-3V0H2V21c0,.55,.45,1,1,1H24v2Zm0-8h-6v2h6v-2Zm-5-6H9v2h10v-2Zm-7-6H5v2h7v-2Z"/></svg>

);

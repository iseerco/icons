import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartWaterfall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H3c-1.65,0-3-1.35-3-3V0H2V21c0,.55,.45,1,1,1H24v2ZM24,0h-2V17h2V0Zm-5,4h-2v6h2V4Zm-5,4h-2v6h2v-6Zm-5,4h-2v6h2v-6Z"/></svg>

);

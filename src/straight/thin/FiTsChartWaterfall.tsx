import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartWaterfall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H2.5c-1.38,0-2.5-1.12-2.5-2.5V0H1V21.5c0,.83,.67,1.5,1.5,1.5H24v1ZM22,0h-1V17h1V0Zm-5,4h-1v6h1V4Zm-5,4h-1v6h1v-6Zm-5,4h-1v6h1v-6Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartCandlestick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23v1H2.5c-1.38,0-2.5-1.12-2.5-2.5V0H1V21.5c0,.83,.67,1.5,1.5,1.5H24Zm-7-10h-2V3h2V0h1V3h2V13h-2v3h-1v-3Zm-1-1h3V4h-3V12Zm-8,4h-2V3h2V0h1V3h2v13h-2v3h-1v-3Zm-1-1h3V4h-3V15Z"/></svg>

);

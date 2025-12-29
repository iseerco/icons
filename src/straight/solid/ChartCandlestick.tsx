import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartCandlestick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22v2H3c-1.65,0-3-1.35-3-3V0H2V21c0,.55,.45,1,1,1H24Zm-7-9h-2V3h2V0h2V3h2V13h-2v3h-2v-3Zm-9,3h-2V3h2V0h2V3h2v13h-2v3h-2v-3Z"/></svg>

);

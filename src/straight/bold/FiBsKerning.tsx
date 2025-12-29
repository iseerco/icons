import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKerning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.897,0l-6.481,24h-3.186L13.712,0h3.186ZM6.9,5l-1.9,7.305-1.9-7.305H0l3.258,12.526c.233,.894,.932,1.494,1.742,1.494s1.509-.601,1.742-1.495l3.258-12.525h-3.1Zm13.474,12h-2.749l-.526,2h-3.1l3.258-12.505c.233-.895,.932-1.495,1.742-1.495s1.509,.601,1.742,1.494l3.258,12.506h-3.1l-.526-2Zm-.334-3l-1.041-4-1.041,4h2.081Z"/></svg>

);

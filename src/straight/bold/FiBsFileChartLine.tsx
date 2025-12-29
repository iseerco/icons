import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileChartLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.382,0H5c-1.654,0-3,1.346-3,3V24H22V5.665L16.382,0ZM5,21V3H14v5h5v13H5Zm1-6h3v4h-3v-4Zm9-2h3v6h-3v-6Zm-4.5-3h3v9h-3V10Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileChartLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.414,0H5c-1.654,0-3,1.346-3,3V24H22V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586V3.414Zm5,18.586H4V3c0-.551,.449-1,1-1H13v7h7v13Zm-13-6h2v4h-2v-4Zm10,4h-2v-6h2v6Zm-6-9h2v9h-2V11Z"/></svg>

);

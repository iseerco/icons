import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileChartLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.414,5h-4.414V.586l4.414,4.414Zm.586,2V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-13,9h-2v4h2v-4Zm4-5h-2v9h2V11Zm4,3h-2v6h2v-6Z"/></svg>

);

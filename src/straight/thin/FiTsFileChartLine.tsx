import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileChartLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.707,0H4.5c-1.378,0-2.5,1.122-2.5,2.5V24H22V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827,.673-1.5,1.5-1.5H14v7h7v15H3Zm4-7h1v4h-1v-4Zm8-2h1v6h-1v-6Zm-4-3h1v9h-1V11Z"/></svg>

);

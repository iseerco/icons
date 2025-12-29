import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartLineUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,23H24v1H2.5c-1.378,0-2.5-1.122-2.5-2.5V0H1V21.5c0,.827,.673,1.5,1.5,1.5ZM17,5v1h5.293l-7.293,7.293-4-4-6.854,6.854,.707,.707,6.146-6.146,4,4L23,6.707v5.293h1V5h-7Z"/></svg>

);

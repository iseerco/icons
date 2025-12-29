import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileExcel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.38,0H5C3.35,0,2,1.35,2,3V24H22V5.66L16.38,0Zm-.8,22h-2.35l-1.29-2.09-1.29,2.09h-2.35l2.46-4-2.46-4h2.35l1.29,2.09,1.29-2.09h2.35l-2.46,4,2.46,4ZM5,12V3H14v5h5v4H5Z"/></svg>

);

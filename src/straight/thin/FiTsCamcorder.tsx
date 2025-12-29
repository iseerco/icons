import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCamcorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9l-4,3v-3.5c0-1.378-1.121-2.5-2.5-2.5h-2.793L9.707,1H0v1H9.293l4,4H2.5c-1.379,0-2.5,1.122-2.5,2.5v15.5H20v-6l4,3V9Zm-5,14H1V8.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5v14.5Zm4-4l-3-2.25v-3.5l3-2.25v8Zm-19,1h12V10H4v10Zm1-9H15v8H5V11Z"/></svg>

);

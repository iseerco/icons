import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileSpreadsheet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.382,0H5c-1.654,0-3,1.346-3,3V24H22V5.664L16.382,0ZM5,21V3H14v5h5v13H5Zm2-5h4v3H7v-3Zm0-5h4v3H7v-3Zm6,5h4v3h-4v-3Zm0-5h4v3h-4v-3Z"/></svg>

);

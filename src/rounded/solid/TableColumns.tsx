import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableColumns = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,22H5c-2.757,0-5-2.243-5-5V9H11v13ZM24,7c0-2.757-2.243-5-5-5H5C2.243,2,0,4.243,0,7H24Zm-11,2v13h6c2.757,0,5-2.243,5-5V9H13Z"/></svg>

);

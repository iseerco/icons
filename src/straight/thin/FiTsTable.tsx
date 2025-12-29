import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,2H2.5c-1.378,0-2.5,1.122-2.5,2.5v17.5h24V4.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,5v6.5h-10.5v-6.5h10.5ZM1,4.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v1.5H1v-1.5Zm10.5,2.5v6.5H1v-6.5h10.5ZM1,14.5h10.5v6.5H1v-6.5Zm11.5,6.5v-6.5h10.5v6.5h-10.5Z"/></svg>

);

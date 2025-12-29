import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNotes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H5.5c-1.378,0-2.5,1.121-2.5,2.5v18.5h14.979l6.021-6.021V2.5c0-1.379-1.121-2.5-2.5-2.5ZM4,2.5c0-.827.673-1.5,1.5-1.5h16c.827,0,1.5.673,1.5,1.5v11.5h-6v6H4V2.5Zm18.565,12.5l-4.565,4.565v-4.565h4.565ZM1,23h15l-1,1H0V7.222c0-.885.387-1.676,1-2.222v18Z"/></svg>

);

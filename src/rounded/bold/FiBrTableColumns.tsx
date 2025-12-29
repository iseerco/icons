import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTableColumns = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.468,2,0,4.468,0,7.5v9c0,3.032,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.468-5.5-5.5-5.5ZM5.5,5h13c1.208,0,2.218,.86,2.45,2H3.05c.232-1.14,1.242-2,2.45-2Zm-2.5,11.5v-6.5h7.5v9H5.5c-1.379,0-2.5-1.121-2.5-2.5Zm15.5,2.5h-5V10h7.5v6.5c0,1.379-1.121,2.5-2.5,2.5Z"/></svg>

);

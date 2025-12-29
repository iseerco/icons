import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,6.5c0,.828-.671,1.5-1.5,1.5h-3v9.5c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-9.5h-3c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h9c.829,0,1.5.672,1.5,1.5Zm6-1v13c0,3.032-2.467,5.5-5.5,5.5H5.5c-3.033,0-5.5-2.468-5.5-5.5V5.5C0,2.468,2.467,0,5.5,0h13c3.033,0,5.5,2.468,5.5,5.5Zm-3,0c0-1.379-1.122-2.5-2.5-2.5H5.5c-1.378,0-2.5,1.121-2.5,2.5v13c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5V5.5Z"/></svg>

);

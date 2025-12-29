import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.381,0H5c-1.654,0-3,1.346-3,3v21h20V5.665L16.381,0ZM5,21V3h9v5h5v13H5Zm3-8h8v3h-8v-3Z"/></svg>

);

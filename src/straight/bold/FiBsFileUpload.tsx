import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileUpload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.381,0H5c-1.654,0-3,1.346-3,3v21h20V5.665L16.381,0ZM5,21V3h9v5h5v13H5Zm11.5-7h-3v5h-3v-5h-3l3.793-3.707c.391-.391,1.024-.391,1.414,0l3.793,3.707Z"/></svg>

);

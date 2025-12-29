import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashRestoreAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,3h-5v-.5c0-1.378-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.122-2.5,2.5v.5H1v3h2v15.5c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V6h2v-3Zm-5,18H6V6h12v15ZM7.5,13l3.793-3.707c.391-.391,1.024-.391,1.414,0l3.793,3.707h-3v5h-3v-5h-3Z"/></svg>

);

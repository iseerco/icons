import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTombstone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,21v-11C22,4.486,17.514,0,12,0S2,4.486,2,10v11H0v3h24v-3h-2ZM5,10c0-3.859,3.14-7,7-7s7,3.141,7,7v11H5v-11Zm8.5-.5h2.5v3h-2.5v4.5h-3v-4.5h-2.5v-3h2.5v-2.5h3v2.5Z"/></svg>

);

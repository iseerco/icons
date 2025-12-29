import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.121,0H5c-1.654,0-3,1.346-3,3V24H22V5.879L16.121,0ZM5,21V3H14v5h5v13H5Zm9-6.357l3-2.143v7l-3-2.143v1.643H7v-6h7v1.643Z"/></svg>

);

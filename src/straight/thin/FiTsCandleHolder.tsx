import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCandleHolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5,7c1.378,0,2.5-1.122,2.5-2.5,0-1.216-1.755-3.505-2.107-3.952l-.393-.498-.393.498c-.352.447-2.107,2.735-2.107,3.952,0,1.378,1.122,2.5,2.5,2.5Zm0-5.312c.717.988,1.5,2.272,1.5,2.812,0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5c0-.54.783-1.824,1.5-2.812Zm12,15.312c-.862,0-1.691.316-2.333.892l.667.745c.458-.411,1.05-.637,1.667-.637,1.378,0,2.5,1.122,2.5,2.5s-1.122,2.5-2.5,2.5h-6.5v-12.5c0-1.378-1.122-2.5-2.5-2.5h-6c-1.378,0-2.5,1.122-2.5,2.5v12.5H0v1h20.5c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5ZM4,10.5c0-.827.673-1.5,1.5-1.5h6c.827,0,1.5.673,1.5,1.5v12.5H4v-12.5Z"/></svg>

);

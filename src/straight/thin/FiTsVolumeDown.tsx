import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVolumeDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2.5,6c-1.378,0-2.5,1.122-2.5,2.5v7c0,1.378,1.122,2.5,2.5,2.5h2.822l6.678,5.458V.585l-6.677,5.415h-2.823Zm8.5-3.316v18.666l-5.322-4.35h-3.178c-.827,0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5,1.5-1.5h3.177l5.323-4.316Zm9,9.316c0,2.757-2.243,5-5,5h-1v-1h1c2.206,0,4-1.794,4-4s-1.794-4-4-4h-1v-1h1c2.757,0,5,2.243,5,5Z"/></svg>

);

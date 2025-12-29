import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTrashCanList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9v1h-8v-1h8Zm-8,6h7v-1h-7v1Zm0,5h6v-1h-6v1Zm.908,2h1.042c-.232,1.14-1.242,2-2.449,2H4.5c-1.378,0-2.5-1.121-2.5-2.5V5H0v-1h5v-1.5c0-1.379,1.122-2.5,2.5-2.5h5c1.378,0,2.5,1.121,2.5,2.5v1.5h5v1h-2v2h-1v-2H3v16.5c0,.827.673,1.5,1.5,1.5h11c.651,0,1.201-.419,1.408-1ZM6,4h8v-1.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v1.5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPhotoCapture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,6c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm0,11c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm-9.5,6h4.5v1H2.5c-1.379,0-2.5-1.121-2.5-2.5v-4.5h1v4.5c0,.827.673,1.5,1.5,1.5Zm20.5-6h1v4.5c0,1.379-1.121,2.5-2.5,2.5h-4.5v-1h4.5c.827,0,1.5-.673,1.5-1.5v-4.5Zm1-14.5v4.5h-1V2.5c0-.827-.673-1.5-1.5-1.5h-4.5V0h4.5c1.379,0,2.5,1.121,2.5,2.5ZM1,7H0V2.5C0,1.121,1.121,0,2.5,0h4.5v1H2.5c-.827,0-1.5.673-1.5,1.5v4.5Z"/>
</svg>

);

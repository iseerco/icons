import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CategoryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,6h3v3h-3v-3Zm9,12h3v-3h-3v3Zm-9,0h3v-3h-3v3Zm9-9h3v-3h-3v3Zm9-4v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-13,9.5c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm0-9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm9,9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm0-9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Z"/>
</svg>

);

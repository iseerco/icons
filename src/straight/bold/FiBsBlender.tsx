import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlender = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.214,16.339L22.937,0H5.495C3.013,0,.995,2.019.995,4.5v4c0,2.481,2.019,4.5,4.5,4.5h1.505v3.257c-1.746.619-3,2.287-3,4.243v3.5h19v-3.5c0-1.875-1.152-3.485-2.786-4.161Zm-14.719-6.339c-.827,0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5,1.5-1.5h1.505v7h-1.505Zm4.505,0v-2h3v-3h-3v-2h9.396l-2.167,13h-7.229v-3h3v-3h-3Zm10,11H7v-.5c0-.827.673-1.5,1.5-1.5h10c.827,0,1.5.673,1.5,1.5v.5Z"/>
</svg>

);

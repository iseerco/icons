import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsClipboardUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.95,2c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217.86-2.45,2H3v19.5c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V2h-5.05Zm4.05,19.5c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5V3h5v-.5c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v.5h5v18.5Zm-5.5-7.5c1.378,0,2.5,1.122,2.5,2.5v2.5h-1v-2.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v2.5h-1v-2.5c0-1.378,1.122-2.5,2.5-2.5h5Zm-2.5-1c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Z"/></svg>

);

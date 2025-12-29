import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsClipboardList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,13h-6v-1h6v1Zm0-5h-6v1h6v-1Zm0,8h-6v1h6v-1ZM9,8h-2v1h2v-1Zm0,4h-2v1h2v-1Zm0,4h-2v1h2v-1Zm12,5.5V2h-5.05c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217,.86-2.45,2H3V21.5c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5ZM9,3v-.5c0-.827,.673-1.5,1.5-1.5h3c.827,0,1.5,.673,1.5,1.5v.5h5V21.5c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5V3h5Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsClipboardPrescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.95,2c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217.86-2.45,2H3v19.5c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V2h-5.05Zm4.05,19.5c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5V3h5v-.5c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v.5h5v18.5Zm-8.487-9.715c.875-.39,1.487-1.267,1.487-2.285,0-1.378-1.122-2.5-2.5-2.5h-2c-.827,0-1.5.673-1.5,1.5v7.5h1v-4h2.454l2.944,4.409-2.398,3.591h1.203l1.797-2.691,1.797,2.691h1.203l-2.398-3.591,2.276-3.409h-1.203l-1.675,2.508-2.487-3.723Zm-3.513-3.285c0-.276.224-.5.5-.5h2c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5h-2.5v-2.5Z"/></svg>

);

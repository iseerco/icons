import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAddressBook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3v3H1v1h2v3.5H1v1h2v3H1v1h2v3H1v1h2v3.5H1v1h2v3h17.5c1.379,0,2.5-1.122,2.5-2.5V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,21.5c0,.827-.673,1.5-1.5,1.5H4V1h16.5c.827,0,1.5.673,1.5,1.5v19Zm-9-10.5c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm5,9.5v2.5h-1v-2.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v2.5h-1v-2.5c0-1.378,1.122-2.5,2.5-2.5h5c1.379,0,2.5,1.122,2.5,2.5Z"/></svg>

);

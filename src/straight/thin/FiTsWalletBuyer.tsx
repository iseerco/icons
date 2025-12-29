import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWalletBuyer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v11c0-1.117-.378-2.136-1-2.964v-7.036H2.5c-.565,0-1.081-.195-1.5-.513v13.013c0,.827.673,1.5,1.5,1.5h10.291c-.209.309-.386.641-.514,1H2.5c-1.378,0-2.5-1.122-2.5-2.5V2.5C0,1.122,1.122,0,2.5,0h21v1H2.5c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5h21.5Zm-2.5,15h-5c-1.378,0-2.5,1.122-2.5,2.5v2.5h1v-2.5c0-.827.673-1.5,1.5-1.5h5c.827,0,1.5.673,1.5,1.5v2.5h1v-2.5c0-1.378-1.122-2.5-2.5-2.5Zm-5.5-4c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Z"/>
</svg>

);

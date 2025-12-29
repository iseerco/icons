import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCastle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,8v2h-4V0h-1V2h-3V0h-1V2h-4V0h-1V2h-3V0h-1V10H1v-2H0v13.5c0,1.379,1.122,2.5,2.5,2.5h6.5v-6c0-1.654,1.346-3,3-3s3,1.346,3,3v6h6.5c1.378,0,2.5-1.121,2.5-2.5V8h-1ZM6,3h12v7h-4v-3c0-1.103-.897-2-2-2s-2,.897-2,2v3H6V3Zm7,7h-2v-3c0-.552,.449-1,1-1s1,.448,1,1v3Zm8.5,13h-5.5v-5c0-2.206-1.794-4-4-4s-4,1.794-4,4v5H2.5c-.827,0-1.5-.673-1.5-1.5V11H23v10.5c0,.827-.673,1.5-1.5,1.5Z"/></svg>

);

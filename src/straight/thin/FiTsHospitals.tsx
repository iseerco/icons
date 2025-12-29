import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHospitals = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,18h2v1h-2v-1Zm0-3h2v-1h-2v1Zm-4,0h2v-1h-2v1Zm0,4h2v-1h-2v1Zm14.5-10h-1v2.5h-2.5v1h2.5v2.5h1v-2.5h2.5v-1h-2.5v-2.5Zm5.5-1.5v16.5H0V2.5C0,1.122,1.121,0,2.5,0h9c1.379,0,2.5,1.122,2.5,2.5v2.5h7.5c1.379,0,2.5,1.122,2.5,2.5ZM13,2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h12V2.5Zm10,5c0-.827-.673-1.5-1.5-1.5h-7.5v17h9V7.5Zm-4,11.5h2v-1h-2v1Zm-4,0h2v-1h-2v1ZM7.5,4h-1v2.5h-2.5v1h2.5v2.5h1v-2.5h2.5v-1h-2.5v-2.5Z"/></svg>

);

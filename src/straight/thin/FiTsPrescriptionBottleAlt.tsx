import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPrescriptionBottleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,2.5c0-1.379-1.122-2.5-2.5-2.5H3.5C2.122,0,1,1.121,1,2.5v2.5h2v16.5c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5V5h2v-2.5Zm-3,19c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5V5h16v16.5Zm2-17.5H2v-1.5c0-.827.673-1.5,1.5-1.5h17c.827,0,1.5.673,1.5,1.5v1.5Zm-10.5,10.5h-3.5v-1h3.5v-3.5h1v3.5h3.5v1h-3.5v3.5h-1v-3.5Z"/></svg>

);

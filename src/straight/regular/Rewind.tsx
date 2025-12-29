import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rewind = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M15,6.485V.137L1.285,9.23l-.029.02a3,3,0,0,0,0,4.883L15,23.943V17.515l9,6.428V.057Zm7,13.572-9-6.429v6.429L2.419,12.505a1,1,0,0,1-.012-1.619L13,3.863v6.509l9-6.429Z"/></g></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.832,24a1.5,1.5,0,0,1-1.061-2.561l7.672-7.671a2.5,2.5,0,0,0,0-3.536L10.771,2.561A1.5,1.5,0,0,1,12.893.439l7.671,7.672a5.5,5.5,0,0,1,0,7.778l-7.671,7.672A1.5,1.5,0,0,1,11.832,24Z"/><path d="M2.287,24a1.5,1.5,0,0,1-1.06-2.561l9.085-9.085a.5.5,0,0,0,0-.708L1.227,2.561A1.5,1.5,0,0,1,3.348.439l9.086,9.086a3.507,3.507,0,0,1,0,4.949L3.348,23.561A1.5,1.5,0,0,1,2.287,24Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MedicalStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="22.715 6.586 21.67 4.881 12.959 10.215 12.959 0 10.959 0 10.959 10.215 2.248 4.881 1.203 6.586 10.044 12 1.203 17.414 2.248 19.119 10.959 13.785 10.959 24 12.959 24 12.959 13.785 21.67 19.119 22.715 17.414 13.874 12 22.715 6.586"/></svg>

);

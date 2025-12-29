import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHeading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,1v22h2v1h-5v-1h2v-11H3v11h2v1H0v-1h2V1H0V0h5v1h-2v10h18V1h-2V0h5v1h-2Z"/></svg>

);

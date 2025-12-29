import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsConciergeBell = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,21v-2h10.5v-2.6c0-5.898-4.666-10.726-10.5-10.988V3h2.5v-1h-6v1h2.5v2.412C5.666,5.674,1,10.502,1,16.4v2.6H11.5v2H0v1H24v-1H12.5Zm-10.5-3v-1.6c0-5.514,4.486-10,10-10s10,4.486,10,10v1.6H2Z"/></svg>

);

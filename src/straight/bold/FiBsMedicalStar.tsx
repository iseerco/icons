import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMedicalStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.831,12l8.144,4.987-1.566,2.559-7.95-4.868v9.323h-3v-9.323l-7.95,4.868-1.566-2.559,8.144-4.987L.942,7.013l1.566-2.559,7.95,4.868V0h3v9.323l7.95-4.868,1.566,2.559-8.144,4.987Z"/></svg>

);

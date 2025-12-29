import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackPointRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,8.001H7v-2h5.389l-3.025-3.121c-.702-.703-1.706-1.013-2.682-.828-.625,.126-1.196,.44-1.637,.9L0,8.001v14H13.806l2.014-9h5.681c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoIron = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,8v14.5l-1.457,1.457L.043,1.457,1.457,.043,10.414,9h11.586v-1c0-2.206-1.794-4-4-4H8V2h10c3.309,0,6,2.691,6,6ZM0,19.5v2.5H17.758L5.855,10.097C2.392,11.815,0,15.379,0,19.5Z"/>
</svg>

);

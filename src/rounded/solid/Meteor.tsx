import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Meteor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,15a2,2,0,0,1-4,0A2,2,0,0,1,11,15ZM23.672,3.191,20.771,8a2.242,2.242,0,0,1,1.871,3.449c-1.748,2.734-5.019,7.655-7.278,9.915A9,9,0,0,1,2.636,8.636C4.892,6.38,9.816,3.108,12.55,1.358A2.242,2.242,0,0,1,16,3.24l4.86-2.9a2.023,2.023,0,0,1,2.533.283A2.034,2.034,0,0,1,23.672,3.191ZM13,15c-.138-5.275-7.863-5.274-8,0C5.138,20.275,12.863,20.274,13,15Z"/></svg>

);

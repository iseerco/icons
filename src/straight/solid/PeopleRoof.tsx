import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleRoof = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,8c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5ZM0,21v3h5v-6h-2c-1.657,0-3,1.343-3,3ZM11.343,2.227c.387-.303.928-.303,1.314,0l10.088,7.895,1.232-1.575L13.89.651c-1.113-.871-2.666-.87-3.779,0L.022,8.546l1.232,1.575L11.343,2.227Zm10.657,11.273c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Zm-1,4.5h-2v6h5v-3c0-1.657-1.343-3-3-3Zm-7-3h-4c-1.654,0-3,1.346-3,3v6h10v-6c0-1.654-1.346-3-3-3Zm-9.5-4c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Z"/>
</svg>

);

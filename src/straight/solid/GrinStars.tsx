import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinStars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,19c-3.336,0-5.392-2.72-6.007-5a21.841,21.841,0,0,0,6,1A21.923,21.923,0,0,0,18,14C17.385,16.28,15.336,19,12,19ZM16.386,6l.652,2.005h2.109l.3.918-1.706,1.24.652,2.006-.781.567L15.9,11.5,14.2,12.737l-.781-.567.652-2.006-1.706-1.24.3-.918h2.109l.652-2ZM8.579,6l.652,2.005H11.34l.3.918-1.706,1.24.652,2.006-.781.567L8.1,11.5,6.39,12.737l-.781-.567.652-2.006L4.555,8.924l.3-.918H6.962l.652-2Z"/></svg>

);

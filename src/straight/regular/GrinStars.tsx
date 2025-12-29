import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinStars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm-.007-7A21.923,21.923,0,0,0,18,14c-.615,2.28-2.664,5-6,5s-5.392-2.72-6.007-5A21.841,21.841,0,0,0,11.993,15Zm4.393-9,.652,2.005h2.109l.3.918-1.706,1.24.652,2.006-.781.567L15.9,11.5,14.2,12.737l-.781-.567.652-2.006-1.706-1.24.3-.918h2.109l.652-2ZM8.579,6l.652,2.005H11.34l.3.918-1.706,1.24.652,2.006-.781.567L8.1,11.5,6.39,12.737l-.781-.567.652-2.006L4.555,8.924l.3-.918H6.962l.652-2Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseLaptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.85,5.48l-.85-.66V1h-2V3.25L10.85,.79c-1.09-.85-2.61-.85-3.7,0L1.15,5.48c-.73,.57-1.15,1.43-1.15,2.36v10.16H5v-5c0-2.76,2.24-5,5-5h8v-.16c0-.93-.42-1.79-1.15-2.36Zm6.15,12.52H7v-5c0-1.65,1.35-3,3-3h10c1.65,0,3,1.35,3,3v5Zm-2,6H9c-1.65,0-3-1.35-3-3v-1h6.41l1,1h3.17l1-1h6.41v1c0,1.65-1.35,3-3,3Z"/></svg>

);

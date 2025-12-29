import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,11c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm5,8h-6c-.552,0-1,.448-1,1v4h8v-4c0-.552-.448-1-1-1Zm9,5h-6v-4c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v4H0v-13.926c0-.959.433-1.848,1.187-2.439L10.092.658c1.125-.881,2.691-.881,3.816,0l8.905,6.977c.754.592,1.187,1.48,1.187,2.439v13.926Zm-8-13c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z"/>
</svg>

);

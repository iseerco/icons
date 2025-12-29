import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.958,8.485c-.778,4.602-3.867,8.689-7.733,10.515H7.775C3.909,17.175,.82,13.087,.042,8.485c-.343-1.766,1.173-3.53,2.967-3.485H20.991c1.794-.045,3.31,1.719,2.967,3.485Z"/>
</svg>

);

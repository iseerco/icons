import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraRotate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.28,3l2.314-3h6.813l2.314,3H6.28Zm17.72,5v16H0V8c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Zm-6,8h-2.043c-.445,1.724-2.013,3-3.873,3-1.114,0-2.138-.453-2.873-1.211l1.789-1.789h-5v5l1.795-1.795c1.1,1.125,2.628,1.795,4.289,1.795,2.968,0,5.439-2.166,5.916-5Zm0-7l-1.795,1.795c-1.1-1.125-2.628-1.795-4.289-1.795-2.968,0-5.439,2.166-5.916,5h2.043c.445-1.724,2.013-3,3.873-3,1.114,0,2.138.453,2.873,1.211l-1.789,1.789h5v-5Z"/>
</svg>

);

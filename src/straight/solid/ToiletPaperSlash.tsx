import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToiletPaperSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.061,6.303l13.932,13.932c-.122,2.097-1.866,3.765-3.993,3.765H0v-2c1.103,0,2-.897,2-2V7.5c0-.405.021-.805.061-1.197Zm13.939,2.197c0-3.238.595-6.491,1.868-8.5H7c-1.372,0-2.591.801-3.484,2.102L1.457.043.043,1.457l22.5,22.5,1.414-1.414-7.957-7.957v-6.086Zm2,0c0-4.694,1.343-8.5,3-8.5s3,3.806,3,8.5-1.343,8.5-3,8.5-3-3.806-3-8.5Zm2,0c0,1.657.448,3,1,3s1-1.343,1-3-.448-3-1-3-1,1.343-1,3Z"/>
</svg>

);

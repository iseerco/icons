import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm3,2h-6c-2.757,0-5,2.243-5,5v5h16v-5c0-2.757-2.243-5-5-5Zm12.957-4.52l-4.926,4.926c-.396.395-.915.593-1.434.593s-1.038-.198-1.433-.592l-2.871-2.871,1.414-1.414,2.87,2.871,4.965-4.926,1.414,1.414Z"/>
</svg>

);

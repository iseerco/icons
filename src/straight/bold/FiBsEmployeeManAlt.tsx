import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEmployeeManAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,19.5v4.5h-3v-4.5c0-1.378-1.121-2.5-2.5-2.5h-1.49l-1.227,1.84,1.216,5.16h-4l1.216-5.16-1.227-1.84h-1.49c-1.378,0-2.5,1.122-2.5,2.5v4.5h-3v-4.5c0-3.033,2.467-5.5,5.5-5.5h7c3.032,0,5.5,2.467,5.5,5.5ZM6,6c0-3.309,2.691-6,6-6s6,2.691,6,6-2.691,6-6,6-6-2.691-6-6Zm3,0c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Z"/>
</svg>

);

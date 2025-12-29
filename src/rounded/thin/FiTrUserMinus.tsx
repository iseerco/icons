import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrUserMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S5.243,1,8,1Zm8,21v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.5c0-3.86-3.141-7-7-7s-7,3.14-7,7v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.5c0-4.411,3.589-8,8-8s8,3.589,8,8Zm8-9.5c0,.276-.224.5-.5.5h-8c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h8c.276,0,.5.224.5.5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCursorPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,9c-4.136,0-7.5,3.364-7.5,7.5s3.364,7.5,7.5,7.5,7.5-3.364,7.5-7.5-3.364-7.5-7.5-7.5Zm0,14c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5-2.916,6.5-6.5,6.5Zm.5-7h3v1h-3v3h-1v-3h-3v-1h3v-3h1v3ZM.052.052l4.808,14.052,2.528-6.716,6.716-2.528L.052.052Zm6.561,6.561l-1.708,4.534L1.659,1.659l9.487,3.245-4.534,1.708Z"/>
</svg>

);

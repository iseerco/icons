import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserCoach = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12c3.309,0,6-2.691,6-6h2v-3h-2.812c-1.039-1.79-2.973-3-5.188-3-3.309,0-6,2.691-6,6s2.691,6,6,6Zm0-3c-1.654,0-3-1.346-3-3h6c0,1.654-1.346,3-3,3Zm9,10v5h-3v-5c0-.975-.701-1.786-1.625-1.962l-1.875,2.962-2.5-3-2.5,3-1.875-2.962c-.924.176-1.625.987-1.625,1.962v5h-3v-5c0-2.757,2.243-5,5-5h8c2.757,0,5,2.243,5,5Z"/>
</svg>

);

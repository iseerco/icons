import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPlug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,8h-6V0h-1v8h-8V0h-1v8H1v1h2v5.5c0,3.584,2.916,6.5,6.5,6.5h2v3h1v-3h2c3.584,0,6.5-2.916,6.5-6.5v-5.5h2v-1Zm-3,6.5c0,3.033-2.468,5.5-5.5,5.5h-5c-3.032,0-5.5-2.467-5.5-5.5v-5.5h16v5.5Z"/>
</svg>

);

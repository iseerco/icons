import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DropdownSelect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM12.961,15.039c-.531,.531-1.391,.531-1.922,0l-5.039-5.039h12l-5.039,5.039Z"/>
</svg>

);

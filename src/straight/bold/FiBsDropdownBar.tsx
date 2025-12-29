import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDropdownBar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5v4.5H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm-3.26,5.71c-.39,.39-1.01,.39-1.4,0l-2.76-2.71h6.92l-2.76,2.71Zm-7.24,5.79h12v3H10v-3Zm-8-1.5h6v6H2v-6Zm8,9.5h12v3H10v-3Zm-8-1.5h6v6H2v-6Z"/>
</svg>

);

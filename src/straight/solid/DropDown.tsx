import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DropDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,10v14h16v-14H0Zm13,12H3v-2h10v2Zm0-4H3v-2h10v2Zm0-4H3v-2h10v2ZM21,0H3C1.343,0,0,1.343,0,3v5h24V3c0-1.657-1.343-3-3-3Zm-1.846,5.71c-.386.386-1.012.386-1.398,0l-2.756-2.71h6.909l-2.756,2.71Z"/>
</svg>

);

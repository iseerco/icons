import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DropDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,19v-2h8v2H4Zm8-6H4v2h8v-2Zm12-3h-8v14H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3v7Zm-10,0H2v12h12v-12Zm8-7c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v5h20V3Zm-5.244,3.71c.386.386,1.012.386,1.398,0l2.756-2.71h-6.909l2.756,2.71Z"/>
</svg>

);

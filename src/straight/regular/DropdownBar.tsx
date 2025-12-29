import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DropdownBar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,13h13v2H9v-2Zm-7,3H6v-4H2v4Zm7,5h13v-2H9v2Zm-7,1H6v-4H2v4ZM15.85,6.71h-.01c.39,.39,1.01,.39,1.4,0l2.76-2.71h-6.91l2.76,2.71Zm8.15-3.71v7H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1v5H22V3Z"/>
</svg>

);

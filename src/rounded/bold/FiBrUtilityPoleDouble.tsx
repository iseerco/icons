import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUtilityPoleDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,5h8c1.379,0,2.5-1.122,2.5-2.5v-1c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-1v-.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-3.5v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-3.5v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-1v-.5c0-.829-.671-1.5-1.5-1.5S0,.671,0,1.5v1c0,1.378,1.122,2.5,2.5,2.5h8v3h-3.5v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-1v-.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v1c0,1.378,1.122,2.5,2.5,2.5h1.379l6.621,6.621v4.879c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-4.879l6.621-6.621h1.379c1.379,0,2.5-1.122,2.5-2.5v-1c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-1v-.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-3.5v-3Zm-5.379,6h2.379v2.379l-2.379-2.379Zm7.758,0l-2.379,2.379v-2.379h2.379Z"/>
</svg>

);

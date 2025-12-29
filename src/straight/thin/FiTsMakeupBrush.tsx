import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMakeupBrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.003,2.824L21.176-.003,6.232,13.569l-6.232,2.454v1.478c0,3.584,2.916,6.5,6.5,6.5h1.491l2.441-6.233L24.003,2.824Zm-14.02,13.951l-2.758-2.758,2.142-1.945,2.562,2.562-1.945,2.141ZM22.622,2.857l-10.022,11.036-2.493-2.493L21.143,1.378l1.479,1.479ZM7.309,23h-.809c-3.033,0-5.5-2.468-5.5-5.5v-.796l5.378-2.119,3.037,3.037-2.106,5.378Z"/>
</svg>

);

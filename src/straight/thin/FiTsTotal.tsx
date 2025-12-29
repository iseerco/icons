import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTotal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,4v-1.5c0-.827-.673-1.5-1.5-1.5H3.176l10,11L3.176,23h16.324c.827,0,1.5-.673,1.5-1.5v-1.5h1v1.5c0,1.379-1.121,2.5-2.5,2.5H2v-1.193l9.824-10.807L2,1.193V0h17.5c1.379,0,2.5,1.122,2.5,2.5v1.5h-1Z"/>
</svg>

);

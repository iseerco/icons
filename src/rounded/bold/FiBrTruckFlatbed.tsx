import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckFlatbed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.322,13.224l-1.487-4.463c-.75-2.249-2.847-3.761-5.218-3.761h-2.117c-.829,0-1.5.672-1.5,1.5v10.5H1.5c-.829,0-1.5.672-1.5,1.5s.671,1.5,1.5,1.5h1.5v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h8v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h1.5c.828,0,1.5-.672,1.5-1.5v-1.5c0-1.746-1.118-3.23-2.678-3.776Zm-7.322-.224v-5h.617c1.077,0,2.031.688,2.372,1.71l1.096,3.29h-4.085Z"/>
</svg>

);

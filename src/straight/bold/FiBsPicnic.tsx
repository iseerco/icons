import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPicnic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,8A9,9,0,0,0,3.118,8H.143l1.91,13.008A3.519,3.519,0,0,0,5.516,24H18.627a3.518,3.518,0,0,0,3.462-2.992L24,8ZM12.059,3a6,6,0,0,1,5.909,5H6.149A6,6,0,0,1,12.059,3Zm7.063,17.572a.5.5,0,0,1-.5.428H5.516a.5.5,0,0,1-.5-.428L3.615,11H9.059l5.5,5.5,5.5-5.5h.469Z"/></svg>

);

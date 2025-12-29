import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,11H3.5c-1.93,0-3.5,1.57-3.5,3.5v4c0,3.033,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5v-4c0-1.93-1.57-3.5-3.5-3.5Zm.5,7.5c0,1.378-1.121,2.5-2.5,2.5H5.5c-1.208,0-2.217-.86-2.449-2h14.449c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5H3v-1.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v4Z"/>
</svg>

);

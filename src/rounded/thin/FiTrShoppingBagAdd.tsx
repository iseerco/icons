import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrShoppingBagAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,6h-3c0-3.309-2.691-6-6-6s-6,2.691-6,6h-3c-1.654,0-3,1.346-3,3v10.5c0,2.481,2.019,4.5,4.5,4.5h12c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-10.5c0-1.103.897-2,2-2h3v3.5c0,.276.224.5.5.5s.5-.224.5-.5v-3.5h10v3.5c0,.276.224.5.5.5s.5-.224.5-.5v-3.5h3c1.103,0,2,.897,2,2v7.5c0,.276.224.5.5.5s.5-.224.5-.5v-7.5c0-1.654-1.346-3-3-3Zm-14,0c0-2.757,2.243-5,5-5s5,2.243,5,5H7Zm17,13.5c0,.276-.224.5-.5.5h-3.5v3.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-3.5h-3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h3.5v-3.5c0-.276.224-.5.5-.5s.5.224.5.5v3.5h3.5c.276,0,.5.224.5.5Z"/>
</svg>

);

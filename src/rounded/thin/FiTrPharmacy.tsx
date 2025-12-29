import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPharmacy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,8h-4.5V3.5c0-1.93-1.57-3.5-3.5-3.5h-1c-1.93,0-3.5,1.57-3.5,3.5v4.5H3.5c-1.93,0-3.5,1.57-3.5,3.5v1c0,1.93,1.57,3.5,3.5,3.5h4.5v4.5c0,1.93,1.57,3.5,3.5,3.5h1c1.93,0,3.5-1.57,3.5-3.5v-4.5h4.5c1.93,0,3.5-1.57,3.5-3.5v-1c0-1.93-1.57-3.5-3.5-3.5Zm2.5,4.5c0,1.378-1.122,2.5-2.5,2.5h-5c-.276,0-.5.224-.5.5v5c0,1.378-1.122,2.5-2.5,2.5h-1c-1.378,0-2.5-1.122-2.5-2.5v-5c0-.276-.224-.5-.5-.5H3.5c-1.378,0-2.5-1.122-2.5-2.5v-1c0-1.378,1.122-2.5,2.5-2.5h5c.276,0,.5-.224.5-.5V3.5c0-1.378,1.122-2.5,2.5-2.5h1c1.378,0,2.5,1.122,2.5,2.5v5c0,.276.224.5.5.5h5c1.378,0,2.5,1.122,2.5,2.5v1Z"/>
</svg>

);

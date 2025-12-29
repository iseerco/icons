import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTabletRugged = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.013,6l1-1v-2.5c0-1.381-1.119-2.5-2.5-2.5h-2.5l-1,1h-8.013l-1-1h-2.5c-1.381,0-2.5,1.119-2.5,2.5v2.5l1,1v2l-1,1v6l1,1v2l-1,1v2.5c0,1.381,1.119,2.5,2.5,2.5h2.5l1-1h8.013l1,1h2.5c1.381,0,2.5-1.119,2.5-2.5v-2.5l-1-1h-.026v-2h.013l1-1v-6l-1-1h-.013v-2h.026Zm-1.026,10v6H4V2h15.987v6h0v8h0Z"/>
</svg>

);

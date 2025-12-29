import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSeal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,9.033V3h-6.033L12,.033l-2.967,2.967H3v6.033L.032,12l2.968,2.967v6.033h6.033l2.967,2.967,2.967-2.967h6.033v-6.033l2.968-2.967-2.968-2.967Zm-3,4.691v4.275h-4.275l-1.725,1.725-1.725-1.725h-4.275v-4.275l-1.725-1.725,1.725-1.725v-4.275h4.275l1.725-1.725,1.725,1.725h4.275v4.275l1.725,1.725-1.725,1.725Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarketplaceAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.5,10c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm6,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5ZM12.158,2h-2.158V0h2.158c.976,0,1.805.698,1.971,1.659l.059.341h9.744l-2.197,7h-6.682c-.978,0-1.807-.699-1.971-1.661l-.924-5.339Zm2.376,2l.519,3h5.213l.941-3h-6.673Zm9.415,8c-.17,1.176-.915,2.156-1.95,2.65v3.35H2V5c0-.551.449-1,1-1h5v-2H3c-1.654,0-3,1.346-3,3v15h11v2h-5v2h12v-2h-5v-2h11v-8h-.05Z"/>
</svg>

);

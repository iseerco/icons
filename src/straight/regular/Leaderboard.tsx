import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Leaderboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,6h-2v2h2c.551,0,1,.449,1,1v1H2v-1c0-.551.449-1,1-1h2v-2h-2c-1.654,0-3,1.346-3,3v15h24v-15c0-1.654-1.346-3-3-3Zm-11,10h12v2h-12v-2Zm-2,2H2v-2h6v2Zm2-4v-2h12v2h-12Zm-2-2v2H2v-2h6Zm-6,8h6v2H2v-2Zm8,2v-2h12v2h-12Zm7-14H7V0l2.5,3,2.5-3,2.5,3,2.5-3v8Z"/>
</svg>

);

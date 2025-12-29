import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalculator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C2.122,0,1,1.121,1,2.5v21.5h22V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,23H2V2.5c0-.827.673-1.5,1.5-1.5h17c.827,0,1.5.673,1.5,1.5v20.5ZM5,8h14v-4H5v4Zm1-3h12v2H6v-2Zm7,14h6v1h-6v-1Zm-8-4h2v1h-2v-1Zm4,0h2v1h-2v-1Zm-4,4h2v1h-2v-1Zm4,0h2v1h-2v-1Zm4-4h2v1h-2v-1Zm4,0h2v1h-2v-1Zm-12-4h2v1h-2v-1Zm4,0h2v1h-2v-1Zm6,1h-2v-1h2v1Zm2-1h2v1h-2v-1Z"/>
</svg>

);

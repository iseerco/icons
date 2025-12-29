import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TvRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,6h-6.858l4.575-4.575L17.303.011l-5.303,5.304L6.697.011l-1.414,1.414,4.575,4.575H3c-1.654,0-3,1.346-3,3v15h24v-15c0-1.654-1.346-3-3-3Zm1,16H2v-13c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v13Zm-18-2h12v-10H4v10Zm2-8h8v6H6v-6Zm12-2h2v2h-2v-2Zm0,4h2v2h-2v-2Zm0,4h2v2h-2v-2Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BallotCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.597,10.817l-2.759,2.702c-.32.32-.744.481-1.168.481-.427,0-.855-.162-1.181-.488l-1.45-1.393,1.386-1.442,1.241,1.192,2.533-2.48,1.399,1.429Zm-1.597,8.183h6v-2h-6v2Zm-4,0h2v-2h-2v2Zm4-12h6v-2h-6v2Zm-2-2h-2v2h2v-2Zm13-2v21H2V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1H5c-.551,0-1,.449-1,1v19h16V3Zm-7,10h4v-2h-1.958l-2.042,2Z"/></svg>

);

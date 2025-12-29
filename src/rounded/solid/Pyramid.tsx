import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="Capa_13" data-name="Capa 13"><path d="M20.036,24H3.964A3.955,3.955,0,0,1,.422,18.267L8.459,2.189A3.932,3.932,0,0,1,11.736.008a3.977,3.977,0,0,1,3.805,2.181l8.037,16.078A3.961,3.961,0,0,1,20.036,24Z"/></g></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24.062,10.261c-.376-1.151-.363-1.111-.738-2.261h-7.697L13.254.604h-2.383l-2.373,7.396H.801c-.376,1.151-.363,1.111-.738,2.261l6.241,4.562-2.392,7.401c.985.71.947.683,1.932,1.393l6.157-4.618,6.282,4.618c.985-.71.947-.683,1.932-1.393l-2.392-7.401,6.241-4.562Zm-11.062,6.739h-2v-2h2v2Zm0-4h-2v-7h2v7Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,11h2v7h-2v-7Zm0,11h2v-2h-2v2Zm13.062-11.739c-.376-1.151-.363-1.111-.738-2.261h-7.697L13.254.604h-2.383l-2.373,7.396H.801c-.376,1.151-.363,1.111-.738,2.261l6.241,4.562-2.392,7.401c.985.71.947.683,1.932,1.393l3.157-2.32v-2.482l-2.472,1.817,2.123-6.57-5.557-4.062h6.863l2.106-6.563,2.106,6.563h6.863l-5.557,4.062,2.123,6.57-2.597-1.909v2.482l3.282,2.412c.985-.71.947-.683,1.932-1.393l-2.392-7.401,6.241-4.562Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrScreenShare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,16v-7.5c0-3.033-2.467-5.5-5.5-5.5H7.5c-3.033,0-5.5,2.467-5.5,5.5v7.5c-1.105,0-2,.895-2,2v1.154c0,1.02,.827,1.846,1.846,1.846H22.154c1.02,0,1.846-.827,1.846-1.846v-1.154c0-1.105-.895-2-2-2Zm-7.231,1h-5.538l-.923-1h-3.308v-7.5c0-1.378,1.122-2.5,2.5-2.5h9c1.378,0,2.5,1.122,2.5,2.5v7.5h-3.308l-.923,1Zm.948-6.476c.605,.605,.177,1.639-.679,1.639h-1.538v2.337c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-2.337h-1.538c-.856,0-1.284-1.034-.679-1.639l3.038-3.038c.375-.375,.983-.375,1.358,0l3.038,3.038Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleHistoryCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.349,24H0v-11c0-1.654,1.346-3,3-3h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.448-1,1v9h7.518c.506.756,1.125,1.429,1.831,2ZM18,0H6v2h12V0Zm3,5H3v2h18v-2Zm3,12c0,3.859-3.14,7-7,7s-7-3.141-7-7,3.14-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-4-3h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2Z"/>
</svg>

);

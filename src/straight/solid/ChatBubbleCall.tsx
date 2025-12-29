import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChatBubbleCall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.4,10.862h-.309c-.601,0-1.09-.488-1.09-1.088l-.002-7.771C14,.9,14.896.003,15.999.002l6.001-.002c1.103,0,2,.897,2,2v7h-5.874l-2.726,1.862Zm2.212,1.863l6.265,6.266-3.171,3.171c-1.105,1.106-2.6,1.716-4.207,1.716C9.252,23.878,0,14.626,0,7.378c0-1.608.609-3.103,1.716-4.208L4.887,0l6.265,6.265-4.125,4.125c1.373,3.061,3.493,5.186,6.453,6.468l4.133-4.132Z"/>
</svg>

);

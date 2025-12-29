import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HexagonCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.637,10.55l-4.252-7.962c-.522-.979-1.536-1.587-2.646-1.587H7.282c-1.107,0-2.12.606-2.644,1.582L.365,10.549c-.488.911-.488,1.999,0,2.911l4.271,7.958c.523.976,1.536,1.582,2.644,1.582h9.457c1.11,0,2.124-.608,2.646-1.587l4.252-7.962c.485-.908.485-1.993,0-2.901Zm-11.728,4.87c-.386.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.392-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"/>
</svg>

);

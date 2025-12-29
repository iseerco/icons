import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HexagonExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.637,10.55l-4.252-7.963c-.522-.979-1.537-1.587-2.646-1.587H7.282c-1.107,0-2.12.606-2.644,1.582L.365,10.549c-.489.912-.488,2,0,2.911l4.272,7.959c.523.976,1.536,1.581,2.643,1.581h9.458c1.11,0,2.124-.608,2.646-1.587l4.252-7.963c.484-.908.484-1.992,0-2.9Zm-10.637,7.45h-2v-2h2v2Zm0-4h-2V6h2v8Z"/></svg>

);

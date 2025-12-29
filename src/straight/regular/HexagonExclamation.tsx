import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HexagonExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.637,10.55l-4.252-7.963c-.522-.979-1.537-1.587-2.646-1.587H7.282c-1.107,0-2.12.606-2.644,1.582L.365,10.549c-.489.912-.488,2,0,2.911l4.272,7.959c.523.976,1.536,1.581,2.643,1.581h9.458c1.11,0,2.124-.608,2.646-1.587l4.252-7.963c.484-.908.484-1.992,0-2.9Zm-1.765,1.959l-4.252,7.963c-.174.326-.512.528-.882.528H7.281c-.369,0-.707-.202-.881-.526l-4.271-7.959c-.171-.319-.172-.701,0-1.021L6.401,3.527c.174-.325.512-.527.881-.527h9.457c.37,0,.708.202.882.528l4.252,7.963c.17.318.17.699,0,1.018Zm-10.873-6.509h2v8h-2V6Zm0,10h2v2h-2v-2Z"/></svg>

);

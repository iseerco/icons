import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HexagonDivide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.637,10.55l-4.252-7.962c-.522-.979-1.536-1.587-2.646-1.587H7.282c-1.108,0-2.122.606-2.644,1.582L.366,10.549c-.489.911-.489,2,0,2.911l4.271,7.958c.523.975,1.536,1.581,2.644,1.581h9.457c1.11,0,2.124-.608,2.646-1.587l4.252-7.962c.485-.908.485-1.993,0-2.901Zm-11.637-4.55c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm0,12c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5-5H7v-2h10v2Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarriageProposal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm9,15.5v2h-5v-4h-5v4h-2v-6h4v-6h-4.28l-4.332-2.401,1.111,9.401h-3.5v5H3v-5H.069L1.239,8.932c.184-1.663,1.584-2.921,3.261-2.93v-.002s.007,0,.011,0c.003,0,.005,0,.007,0h0c1.269,.008,2.393,.685,3.348,1.322l4.414,2.678h6.22c1.379,0,2.5,1.122,2.5,2.5v9.5h3ZM4.5,5c1.381,0,2.5-1.119,2.5-2.5S5.881,0,4.5,0,2,1.119,2,2.5s1.119,2.5,2.5,2.5Z"/>
</svg>

);

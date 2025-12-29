import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDirectionSignal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.707,14.5l-3.5-3.5h-7.707v-2h9.5V2h-9.508l.008-1.998-1-.004-.008,2.002H3.793L.293,5.5l3.5,3.5h7.707v2H2v7h9.49l.01,6.001,1-.002-.01-5.999h7.717l3.5-3.5ZM4.207,8l-2.5-2.5,2.5-2.5h16.793v5H4.207Zm-1.207,9v-5h16.793l2.5,2.5-2.5,2.5H3Z"/>
</svg>

);

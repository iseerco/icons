import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBracketRoundRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,24c-.47,0-.94-.22-1.23-.64-.47-.68-.31-1.61,.36-2.09,.19-.13,4.37-3.19,4.37-9.27S8.81,2.85,8.63,2.72c-.67-.48-.83-1.41-.36-2.09,.48-.67,1.41-.84,2.08-.37,.23,.16,5.64,4.04,5.64,11.73s-5.41,11.57-5.64,11.73c-.26,.18-.56,.27-.86,.27Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBracketRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,24c-.3,0-.59-.09-.86-.27-.23-.16-5.64-4.04-5.64-11.73S13.41,.43,13.64,.27c.68-.47,1.62-.31,2.09,.37,.48,.68,.31,1.61-.37,2.09-.17,.12-4.36,3.18-4.36,9.27s4.19,9.15,4.37,9.28c.67,.48,.83,1.41,.36,2.09-.29,.41-.76,.64-1.23,.64Z"/></svg>

);

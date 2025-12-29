import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.733,7.68l-1.467-1.36L10.56,.613c.807-.807,2.075-.807,2.854-.027l5.319,5.734-1.467,1.36L13,3.08v12.92h-2V3.034L6.733,7.68Zm15.108-1.598l-1.841,1.74v14.178H4V7.805l-1.834-1.745c-.099,.297-.166,.61-.166,.94V24H22V7c0-.322-.064-.627-.159-.918Z"/></svg>

);

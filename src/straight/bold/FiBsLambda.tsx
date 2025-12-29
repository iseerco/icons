import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLambda = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21v3h-3.285c-1.312,0-2.501-.723-3.105-1.887l-6.125-11.791-7.104,13.678H1L9.794,7.068l-1.973-3.799c-.087-.166-.257-.27-.444-.27h-3.377V0h3.377c1.312,0,2.502.723,3.106,1.887l9.788,18.844c.087.166.256.27.443.27h3.285Z"/>
</svg>

);

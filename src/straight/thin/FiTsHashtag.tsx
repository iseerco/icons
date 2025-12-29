import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHashtag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.882,8l.118-1h-6.469l.841-7h-1.053l-.841,7h-7.842l.841-7h-1.053l-.841,7H.941l-.118,1h6.639l-.841,7H.118L0,16h6.502l-.961,8h1.053l.961-8h7.842l-.961,8h1.053l.961-8h6.726l.118-1h-6.724l.841-7h6.472Zm-8.365,7h-7.842l.841-7h7.842l-.841,7Z"/></svg>

);

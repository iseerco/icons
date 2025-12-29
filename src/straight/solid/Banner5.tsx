import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banner5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,6s2.308-1,6-1,6,1,6,1v8s-2.769-1-6-1-6,1-6,1V6Zm.676,9.805l-2.672.953-.002-6.39c-2.408.576-4.002,1.632-4.002,1.632v.068c1.5.932,3,2.932,3,2.932,0,0-1.808,2.038-3,4.932v.068c2.5-1,5.184-1.822,7-2v-2.299c-.201.062-.319.103-.324.104Zm17.324-3.737v-.068s-1.593-1.055-4-1.632v6.403l-2.68-.967s-.121-.042-.32-.103v2.299c1.816.178,4.5,1,7,2v-.068c-1.192-2.893-3-4.932-3-4.932,0,0,1.5-2,3-2.932Z"/>
</svg>

);

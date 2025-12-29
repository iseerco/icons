import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClipoardWrong = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16.561,12.061l-2.439,2.439,2.439,2.439-2.121,2.121-2.439-2.439-2.439,2.439-2.121-2.121,2.439-2.439-2.439-2.439,2.121-2.121,2.439,2.439,2.439-2.439,2.121,2.121Zm5.439-6.396V24H2V3C2,1.346,3.346,0,5,0h11.382l5.618,5.664Zm-3,15.336V8h-5V3H5V21h14Z"/>
</svg>

);

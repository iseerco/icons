import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotFoundAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.994,21.873l-5.947-5.947c1.225-1.66,1.959-3.703,1.959-5.92C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.217,0,4.26-.734,5.92-1.959l5.947,5.947,2.121-2.121Zm-13.988-4.867c-3.859,0-7-3.14-7-7s3.141-7,7-7,7,3.14,7,7-3.141,7-7,7Zm4.305-9.195l-2.189,2.189,2.189,2.189-2.121,2.121-2.189-2.189-2.189,2.189-2.121-2.121,2.189-2.189-2.189-2.189,2.121-2.121,2.189,2.189,2.189-2.189,2.121,2.121Z"/>
</svg>

);

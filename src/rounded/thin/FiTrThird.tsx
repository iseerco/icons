import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrThird = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.5,14h-2.5v-4h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-2.5v-2.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.5h-4v-2.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h2.5v4H.5c-.276,0-.5.224-.5.5s.224.5.5.5h2.5v2.5c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h4v2.5c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-7.5,0v-4h4v4h-4Zm20,2.5c0,3.032-2.467,5.5-5.5,5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5h-4c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h3.5c2.206,0,4-1.794,4-4s-1.794-4-4-4h-5.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5.5c2.757,0,5,2.243,5,5,0,1.867-1.029,3.499-2.55,4.357,2.073.789,3.55,2.797,3.55,5.143Z"/>
</svg>

);

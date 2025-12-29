import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWalletArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.5,14c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-1.5-4h3v-5.979h2.484l-3.157-3.65c-.443-.494-1.217-.494-1.66,0l-3.183,3.65h2.516v5.979Zm5-3v14H4c-.552,0-1-.449-1-1v-10.142c.322.084.653.142,1,.142h10v-3H4c-.552,0-1-.449-1-1s.448-1,1-1h5.977l2.616-3H4C1.794,2,0,3.794,0,6v14c0,2.206,1.794,4,4,4h20V7h-3Z"/>
</svg>

);

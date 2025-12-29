import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DigitalPayment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,5.5c0-1.378-1.121-2.5-2.5-2.5h-5.5V0H0V21c0,1.654,1.346,3,3,3H13c1.654,0,3-1.346,3-3v-5h8V5.5Zm-2.5-.5c.275,0,.5,.224,.5,.5v1.5h-6v-2h5.5Zm-7.5,16c0,.551-.448,1-1,1H3c-.552,0-1-.449-1-1v-3H14v3Zm0-5H2V2H14v14Zm2-2v-5h6v5h-6Zm-10.075-2.575l-2.182-2.268,1.387-1.441,2.216,2.301,3.614-3.703,1.398,1.43-3.607,3.696h.001l-.004,.004c-.744,.744-2.058,.746-2.823-.019Zm4.075,9.575H6v-2h4v2Z"/>
</svg>

);

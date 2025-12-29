import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,11h-3.5v7h-3v-7h-3.632l4.236-4.629c.443-.494,1.217-.494,1.66,0l4.236,4.629Zm7,1c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.038,9,9,9,9-4.038,9-9Z"/></svg>

);

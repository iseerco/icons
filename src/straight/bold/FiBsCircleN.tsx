import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.038,9-9,9Zm2-14.75h3v9.515c0,.889-.573,1.653-1.425,1.904-.189.056-.38.082-.568.082-.661,0-1.287-.331-1.661-.914l-3.346-5.156v6.069h-3v-9.5c0-.889.573-1.653,1.425-1.904.854-.25,1.749.083,2.229.832l3.346,5.156v-6.084Z"/></svg>

);

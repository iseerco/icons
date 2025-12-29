import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowsAltV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,6h4.659L13.076,.445c-.532-.593-1.461-.593-1.993,0L6,6h4.5v12H6l5.083,5.555c.532,.593,1.461,.593,1.993,0l5.083-5.555h-4.659V6Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,10.75c0,1.2-1.48,3.14-3.85,5.04-.09,.07-.21,.07-.3,0-2.38-1.91-3.85-3.84-3.85-5.04,0-.96,.67-1.75,1.5-1.75s1.5,.79,1.5,1.75c0,.55,.45,1,1,1s1-.45,1-1c0-.96,.67-1.75,1.5-1.75s1.5,.79,1.5,1.75Zm8,1.25c0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0s12,5.38,12,12Zm-6-1.25c0-2.07-1.57-3.75-3.5-3.75-.98,0-1.86,.43-2.5,1.13-.64-.7-1.52-1.13-2.5-1.13-1.93,0-3.5,1.68-3.5,3.75,0,2.41,2.5,4.92,4.6,6.6,.41,.33,.9,.49,1.4,.49s1-.16,1.4-.49c2.1-1.68,4.6-4.2,4.6-6.6Z"/></svg>

);

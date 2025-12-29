import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AgeRestrictionSeven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,8.229l-.1.303-4.096,8.442-1.8-.873,3.446-7.102h-3.45v-2h6v1.229Zm7,4.771h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2Z"/>
</svg>

);

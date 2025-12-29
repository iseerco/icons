import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UtilityPoleDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,4h11V0h-2v2h-2V0h-2v2h-5V0h-2v2h-5V0h-2v2h-2V0H0v4h11v4h-5v-2h-2v2h-2v-2H0v4h4.586l6.414,6.414v7.586h2v-7.586l6.414-6.414h4.586v-4h-2v2h-2v-2h-2v2h-5v-4Zm-5.586,6h3.586v3.586l-3.586-3.586Zm9.172,0l-3.586,3.586v-3.586h3.586Z"/>
</svg>

);

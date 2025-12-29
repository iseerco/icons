import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUtilityPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5V0h-3v2h-1V0h-3v2h-3.5V0h-3v2h-3.5V0h-3v2h-1V0H0v5h3.879l6.621,6.621v12.379h3v-12.379l6.621-6.621h3.879Zm-15.879,0h2.379v2.379l-2.379-2.379Zm5.379,2.379v-2.379h2.379l-2.379,2.379Z"/>
</svg>

);

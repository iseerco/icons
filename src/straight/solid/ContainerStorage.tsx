import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ContainerStorage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v-2H0v2h1v14H0v2h24v-2h-1V5h1Zm-16,12h-2V7h2v10Zm5,0h-2V7h2v10Zm5,0h-2V7h2v10Z"/>
</svg>

);

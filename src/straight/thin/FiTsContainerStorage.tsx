import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsContainerStorage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v-1H0v1h1v16H0v1h24v-1h-1V4h1Zm-2,16H2V4h20v16Zm-8-2h-1V6h1v12Zm3,0h-1V6h1v12Zm3,0h-1V6h1v12Zm-9,0h-1V6h1v12Zm-3,0h-1V6h1v12Zm-4,0V6h1v12h-1Z"/>
</svg>

);

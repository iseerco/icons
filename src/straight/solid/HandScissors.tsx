import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandScissors = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.955,2.952c-.441-.46-1.012-.774-1.637-.9-.976-.185-1.98.125-2.682.828l-2.437,2.479,4.782,1.102-.44,1.91L1.88,5.046c-.887-.21-1.776.339-1.986,1.225-.21.887.339,1.776,1.225,1.986l9.18,2.244L1.12,12.745c-.887.21-1.435,1.099-1.225,1.986.21.887,1.099,1.435,1.986,1.225l7.395-1.784,1.725,7.829h13v-14l-5.045-5.049Z"/>
</svg>

);

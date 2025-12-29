import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandMiddleFinger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,9.534V2.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5v5.821l-.474-.112c-1.8-.425-3.526.941-3.526,2.79v6h-2v-5.389l-3.121,3.025c-.703.702-1.013,1.706-.828,2.682.126.625.44,1.196.9,1.637l5.049,5.045h15v-13l-6-1.466Z"/>
</svg>

);

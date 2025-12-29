import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShovel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.89,8.011l2.121-2.121L18.11-.011l-2.121,2.121,1.89,1.89-8.129,8.129-3.182-3.182-4.371,4.372c-1.417,1.417-2.197,3.3-2.197,5.303v5.379h5.379c2.003,0,3.886-.78,5.303-2.197l4.372-4.371-3.182-3.182,8.129-8.129,1.89,1.89Zm-13.329,11.671c-.85.85-1.98,1.318-3.182,1.318h-2.379v-2.379c0-1.202.468-2.332,1.318-3.182l2.25-2.25,4.243,4.243-2.25,2.25Z"/>
</svg>

);

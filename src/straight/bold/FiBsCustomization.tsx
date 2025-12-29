import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCustomization = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.836,13.309l-3.536-.944-1.835,3.635-.864-.154-.328-2.561L2.195,23.926.074,21.805l10.624-10.062-2.54-.325-.121-.858,3.651-1.881-1.001-3.509.626-.626,2.952,2.952,3.854-2.255.659.659-2.256,3.852,2.936,2.936-.622.622ZM21,0h-3v3h3v3h3v-3c0-1.654-1.346-3-3-3Zm0,16h-3v3h3c1.654,0,3-1.346,3-3v-3h-3v3ZM8,3h3V0h-3c-1.654,0-3,1.346-3,3v3h3v-3Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Customization = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.836,13.309l-3.536-.944-1.835,3.635-.864-.154-.344-2.689L1.47,23.944.056,22.53l10.771-10.771-2.669-.341-.121-.858,3.651-1.881-1.001-3.509.626-.626,2.952,2.952,3.854-2.255.659.659-2.256,3.852,2.936,2.936-.622.622ZM21.5,0h-3.5v2h3.5c.275,0,.5.225.5.5v3.5h2v-3.5c0-1.379-1.121-2.5-2.5-2.5Zm.5,16.5c0,.275-.225.5-.5.5h-3.5v2h3.5c1.379,0,2.5-1.121,2.5-2.5v-3.5h-2v3.5ZM7,2.5c0-.275.225-.5.5-.5h3.5V0h-3.5c-1.379,0-2.5,1.121-2.5,2.5v3.5h2v-3.5Z"/>
</svg>

);

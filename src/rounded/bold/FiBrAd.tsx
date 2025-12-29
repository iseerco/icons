import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,15c-.007,1.307-1.993,1.307-2,0,.007-1.307,1.993-1.307,2,0Zm-11.312-1h1.625l-.812-2.553-.812,2.553ZM24,7v10c0,2.761-2.239,5-5,5H5c-2.761,0-5-2.239-5-5V7C0,4.239,2.239,2,5,2h14c2.761,0,5,2.239,5,5Zm-11.571,10.045l-3.5-11c-.386-1.368-2.473-1.368-2.858,0l-3.5,11c-.251,.789,.185,1.633,.975,1.884,.786,.252,1.633-.185,1.884-.975l.304-.955h3.534l.304,.955c.249,.796,1.116,1.226,1.884,.975,.79-.251,1.226-1.095,.975-1.884ZM21,6.5c-.034-1.972-2.967-1.971-3,0v4.642c-2.614-.747-5.286,1.509-4.98,4.258,.203,2.078,2.071,3.6,4.159,3.6h2.322c.828,0,1.5-.672,1.5-1.5V6.5Z"/></svg>

);

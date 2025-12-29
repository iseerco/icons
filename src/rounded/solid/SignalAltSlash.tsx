import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalAltSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.707,23.707h0c-.39.391-1.023.392-1.414.001L.294,1.708c-.391-.39-.392-1.023-.001-1.414h0c.39-.391,1.024-.392,1.415-.001l11.293,11.313v-5.605c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2v9.598s2,1.996,2,1.996V2c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2v19.588s.705.705.705.705c.391.39.392,1.023.002,1.414ZM3,17h0c-1.105,0-2,.895-2,2v3c0,1.105.895,2,2,2h0c1.105,0,2-.895,2-2v-3c0-1.105-.895-2-2-2Zm6,7h0c1.105,0,2-.895,2-2v-6.739l-4-3.993v10.731c0,1.105.895,2,2,2Zm6,0h0c1.105,0,2-.895,2-2v-.749l-4-3.993v4.742c0,1.105.895,2,2,2Z"/></svg>

);

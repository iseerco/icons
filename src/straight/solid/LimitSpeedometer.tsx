import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LimitSpeedometer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,12l-7,12h14l-7-12Zm1,11h-2v-2h2v2Zm-2-3v-4h2v4h-2Zm-4.232-3l4.083-7h2.298l3.012,5.164c.538-1.307.839-2.715.839-4.164C22,4.934,17.065,0,11,0S0,4.934,0,11c0,3.574,1.752,6.938,4.686,9l.585.411,2.228-3.411h4.268ZM4.518,5.815l1.296-1.296,4.584,4.584c.191-.061.39-.102.601-.102,1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2c0-.211.042-.41.102-.601l-4.584-4.584Z"/>
</svg>

);

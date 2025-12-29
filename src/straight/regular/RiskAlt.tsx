import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RiskAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,3.714l-6,10.286h12L10,3.714Zm1,9.286h-2v-2h2v2Zm-2-3v-3h2v3h-2Zm14.972,12.558l-6.233-6.233c1.412-1.725,2.262-3.927,2.262-6.324C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.398,0,4.6-.85,6.324-2.262l6.233,6.233,1.414-1.414ZM2,10C2,5.589,5.589,2,10,2s8,3.589,8,8-3.589,8-8,8S2,14.411,2,10Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopeOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.767,8.392,15.535,1.464A5,5,0,0,0,8.48,1.449L1.233,8.392A4.017,4.017,0,0,0,0,11.28V24H24V11.28A4.017,4.017,0,0,0,22.767,8.392ZM9.879,2.878a3.063,3.063,0,0,1,4.258.016l6.748,6.464-6.764,6.764a3.074,3.074,0,0,1-4.242,0L3.115,9.358ZM22,22H2V11.28c0-.064.013-.126.019-.19l6.446,6.446a5,5,0,0,0,7.07,0l6.446-6.446c.006.064.019.126.019.19Z"/></svg>

);

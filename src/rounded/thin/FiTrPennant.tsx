import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.281,10.125L4.051,4.458c.577-.458,.949-1.166,.949-1.958C5,1.122,3.879,0,2.5,0S0,1.122,0,2.5c0,1.207,.86,2.217,2,2.45V23.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2.632l19.291-5.997c1.038-.346,1.709-1.277,1.709-2.372s-.671-2.025-1.719-2.375ZM1,2.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5ZM21.984,13.92L3,19.821V5.179l18.975,5.897c.756,.252,1.025,.901,1.025,1.423s-.27,1.171-1.016,1.42Z"/></svg>

);

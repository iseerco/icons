import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.855,18.441c1.424-1.934,2.145-4.109,2.145-6.477v-5.755c0-1.727-1.102-3.253-2.741-3.797L12,.005l-7.259,2.407c-.222.074-.435.166-.638.276L1.457.043.043,1.457l22.5,22.5,1.414-1.414-4.102-4.102Zm-2.825,2.831c-1.709,1.303-3.408,2.075-4.236,2.409l-.836.336-.806-.404c-2.146-1.071-9.151-5.082-9.151-11.648v-5.721l15.03,15.029Z"/>
</svg>

);

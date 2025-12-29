import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatWinter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3s1.346-3,3-3h18c1.654,0,3,1.346,3,3Zm-3-5c.249,0,.489.038.728.074-.852-5.003-3.737-10.561-7.957-11.81.586-.588.881-1.467.65-2.402-.211-.854-.904-1.557-1.756-1.776-1.668-.43-3.165.817-3.165,2.414,0,.689.279,1.312.73,1.765-2.793.827-5,3.541-6.42,6.735h13.534c.384,0,.741.215.902.563.003.007.006.013.009.02.305.659-.177,1.418-.902,1.418H3.039c-.334,1.021-.594,2.058-.767,3.074.24-.035.479-.074.728-.074h18Z"/>
</svg>

);

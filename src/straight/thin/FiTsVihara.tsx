import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVihara = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18c-2.936,0-3.93-5.16-4-5.545v-3.455h2v-1c-2.936,0-3.93-5.16-4-5.545V0h-1v2H7s0-2,0-2h-1v2.455c-.07.386-1.064,5.545-4,5.545v1h2v3.455c-.07.386-1.064,5.545-4,5.545v1h2v5h1v-5h5v5h1v-5h6v5h1v-5h5v5h1v-5h2v-1Zm-5-6h-4s0-3,0-3h4v3Zm-5-3v3h-4s0-3,0-3h4ZM6.911,3h10.179c.22,1.012.915,3.573,2.473,5H4.438c1.558-1.427,2.253-3.988,2.473-5Zm2.089,6v3h-4s0-3,0-3h4Zm-6.562,9c1.558-1.427,2.253-3.988,2.473-5h14.179c.22,1.012.915,3.573,2.473,5H2.438Z"/>
</svg>

);

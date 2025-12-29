import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleMicrophone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-2,7c0-1.105.895-2,2-2s2,.895,2,2v5c0,1.105-.895,2-2,2s-2-.895-2-2v-5Zm3,10.916v2.084h-2v-2.084c-2.834-.477-5-2.948-5-5.916h2c0,2.206,1.794,4,4,4s4-1.794,4-4h2c0,2.968-2.166,5.439-5,5.916Z"/>
</svg>

);

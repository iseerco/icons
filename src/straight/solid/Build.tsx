import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Build = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,16h-11v-6h11v6Zm-2-10c0,1.103-.897,2-2,2h-5c-.737,0-1.375-.405-1.722-1h-2.278v4.981L1.28,8.061c-.79-.4-1.28-1.189-1.28-2.061s.49-1.661,1.28-2.061L11,.019v4.981h2.278c.347-.595.985-1,1.722-1h5c1.103,0,2,.897,2,2Zm-4,12v6h6v-6h-6Zm-10,6h8v-6h-8v6Zm-2-6H0v6h6v-6Z"/>
</svg>

);

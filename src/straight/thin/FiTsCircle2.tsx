import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircle2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm4,16h-6.93c.292-.985,1.454-1.545,2.771-2.18,1.853-.894,4.159-2.005,4.159-4.82,0-2.206-1.794-4-4-4s-4,1.794-4,4h1c0-1.654,1.346-3,3-3s3,1.346,3,3c0,2.188-1.746,3.028-3.593,3.919-1.675,.808-3.407,1.643-3.407,3.581v.5h8v-1Z"/></svg>

);

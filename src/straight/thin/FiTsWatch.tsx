import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWatch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.5,11.793l3.354,3.354-.707.707-3.646-3.646v-6.207h1v5.793Zm5.5,8.202v4.005h-1v-3.342c-1.472.853-3.18,1.342-5,1.342s-3.528-.489-5-1.342v3.342h-1v-4.005c-2.427-1.826-4-4.73-4-7.995s1.573-6.169,4-7.995V0h1v3.342c1.472-.853,3.18-1.342,5-1.342s3.528.489,5,1.342V0h1v4.005c2.427,1.826,4,4.73,4,7.995s-1.573,6.169-4,7.995Zm3-7.995c0-4.962-4.038-9-9-9S3,7.038,3,12s4.038,9,9,9,9-4.037,9-9Z"/></svg>

);

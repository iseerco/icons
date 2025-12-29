import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FireExtinguisher = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,3h6v2h-6v2.09c2.833.478,5,2.942,5,5.91v11H0v-4h8v-2H0v-5c0-2.967,2.167-5.431,5-5.91v-2.018c-1.409.156-2.76.625-3.95,1.409L-.051,4.813c1.518-1.002,3.248-1.6,5.051-1.763V1h2v2Zm8-.27v2.539l9,2.704V.027l-9,2.704Z"/>
</svg>

);

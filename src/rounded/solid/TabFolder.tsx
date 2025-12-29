import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,8v-3C0,2.794,1.794,1,4,1h2c.379,0,.725.214.895.553l1.224,2.447h2.042l-1.002-2.025c-.222-.449.105-.975.605-.975h1.775c.861,0,1.625.551,1.897,1.368l.807,1.632h2.064l-1.002-2.025c-.222-.449.105-.975.605-.975h1.782c.861,0,1.625.551,1.897,1.368l.883,1.68c1.981.238,3.526,1.908,3.526,3.952H0Zm0,2v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8H0Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShovelSnow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.957.043l-1.414,1.414,1.793,1.793-6.758,6.758-2.069-2.069c-1.25-1.251-3.285-1.251-4.535,0L.086,13.827l10.122,10.122,5.888-5.888c1.25-1.25,1.25-3.285,0-4.535l-2.104-2.104,6.758-6.758,1.793,1.793,1.414-1.414L18.957.043ZM2.836,13.75l3.15-3.15,1.414,1.414-3.15,3.15-1.414-1.414Zm3,3l3.15-3.15,1.414,1.414-3.15,3.15-1.414-1.414Zm4.414,4.414l-1.414-1.414,3.15-3.15,1.415,1.414-3.151,3.15Z"/>
</svg>

);

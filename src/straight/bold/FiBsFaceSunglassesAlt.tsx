import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceSunglassesAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,3c3.113,0,5.862,1.59,7.478,4h-5.685l-1,1h-1.64l-1-1h-5.632c1.617-2.41,4.365-4,7.478-4Zm0,18c-4.962,0-9-4.037-9-9,0-.14.015-.276.021-.415.403.843,1.257,1.415,2.224,1.415h3.155c1.14,0,2.129-.772,2.406-1.878l.03-.122h2.272l.031.122c.277,1.105,1.267,1.878,2.406,1.878h3.155c1.005,0,1.892-.614,2.273-1.513.01.171.026.34.026.513,0,4.963-4.038,9-9,9Zm3.752-7.332l2.496,1.664c-1.623,2.434-4.061,3.668-7.248,3.668v-3c.875,0,3.197,0,4.752-2.332Z"/>
</svg>

);

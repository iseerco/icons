import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M422.194,69.944c-90.614-92.173-238.793-93.437-330.966-2.823s-93.437,238.793-2.823,330.966  c1.126,1.146,2.264,2.28,3.414,3.402l83.892,77.509c44.849,43.874,116.481,44.054,161.549,0.404l84.934-78.487  C513.586,309.518,513.586,161.34,422.194,69.944z M341.813,256.705h-63.828v63.828c0,11.75-9.526,21.276-21.276,21.276  s-21.276-9.526-21.276-21.276v-63.828h-63.828c-11.75,0-21.276-9.526-21.276-21.276s9.526-21.276,21.276-21.276h63.828v-63.828  c0-11.75,9.526-21.276,21.276-21.276s21.276,9.526,21.276,21.276v63.828h63.828c11.75,0,21.276,9.526,21.276,21.276  S353.563,256.705,341.813,256.705z"/>
</svg>

);

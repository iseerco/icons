import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMeasuringTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,7c0-.552,1.119-1,2.5-1s2.5.448,2.5,1-1.119,1-2.5,1-2.5-.448-2.5-1Zm17,3v13h-14.5c-5.327,0-9.5-2.636-9.5-6V7C0,3.636,4.173,1,9.5,1s9.5,2.636,9.5,6v3h5ZM3,7c0,1.416,2.779,3,6.5,3s6.5-1.584,6.5-3-2.779-3-6.5-3-6.5,1.584-6.5,3Zm18,6h-11.5c-2.541,0-4.812-.604-6.5-1.596v5.596c0,.917,1.169,1.901,3,2.483v-3.832c.945.196,1.952.304,3,.332v4.003c.165.006.331.013.5.013h1.5v-4h3v4h2v-4h3v4h2v-7Z"/>
</svg>

);

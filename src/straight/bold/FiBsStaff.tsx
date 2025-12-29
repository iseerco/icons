import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStaff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.128,23.993L.007,21.872l10.71-10.71c.73-.73,1.208-1.696,1.344-2.72l.663-4.971c.264-1.979,1.968-3.471,3.965-3.471h3.312c2.206,0,4,1.794,4,4v2c0,2.206-1.794,4-4,4h-2v-3h2c.552,0,1-.449,1-1v-2c0-.551-.448-1-1-1h-3.312c-.499,0-.925.373-.99.867l-.663,4.971c-.224,1.673-1.004,3.251-2.197,4.445L2.128,23.993Z"/>
</svg>

);

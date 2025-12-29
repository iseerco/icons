import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HoneyPot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,2V0h22v2H1Zm21.191,2h-6.691c-.827,0-1.5.673-1.5,1.5v4.5h-2v-4.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v8.5h-2V5.5c0-.827-.673-1.5-1.5-1.5H1.809c-1.004,1.859-1.809,3.934-1.809,5.905,0,4.153,2.699,9.858,5.374,13.669l.298.426h12.655l.298-.426c2.675-3.812,5.374-9.517,5.374-13.669,0-1.971-.805-4.045-1.809-5.905Z"/>
</svg>

);

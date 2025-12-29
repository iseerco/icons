import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPointerText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.5,4.5v15c0,.827,.673,1.5,1.5,1.5h3v3h-3c-1.157,0-2.202-.451-3-1.17-.798,.72-1.843,1.17-3,1.17h-3v-3h3c.827,0,1.5-.673,1.5-1.5V4.5c0-.827-.673-1.5-1.5-1.5h-3V0h3c1.157,0,2.202,.451,3,1.17,.798-.72,1.843-1.17,3-1.17h3V3h-3c-.827,0-1.5,.673-1.5,1.5Z"/>
</svg>

);

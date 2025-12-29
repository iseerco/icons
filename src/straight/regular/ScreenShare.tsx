import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScreenShare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,15V3H2V15H0v3c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3v-3h-2ZM4,5H20V15h-4.914l-1,1h-4.172l-1-1H4V5Zm18,13c0,.551-.449,1-1,1H3c-.551,0-1-.449-1-1v-1h6.086l1,1h5.828l1-1h6.086v1Zm-12.749-6.749l-1.414-1.414,2.756-2.756c.775-.775,2.038-.775,2.812,0l2.757,2.757-1.414,1.414-1.749-1.749v4.497h-2v-4.507l-1.749,1.758Z"/>
</svg>

);

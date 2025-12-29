import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBs2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,24H4v-1.5c0-3.815,3.347-5.637,6.584-7.398,3.3-1.795,6.416-3.492,6.416-7.102,0-2.757-2.243-5-5-5s-5,2.243-5,5h-3C4,3.589,7.589,0,12,0s8,3.589,8,8c0,5.393-4.426,7.801-7.982,9.737-2.214,1.205-3.812,2.143-4.554,3.263h12.536v3Z"/></svg>

);

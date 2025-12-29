import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSubscriptionAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,14.11l11,3.143v6.747h-3v-4.484l-8-2.286v6.769h-3l-4.266-3.391c-.866-.722-.983-2.008-.261-2.874.722-.866,2.008-.983,2.874-.261l1.64,1.222v-9.275c0-.911.799-1.632,1.739-1.479.737.12,1.273.812,1.273,1.56v4.61ZM20.5,0H3.5C1.57,0,0,1.57,0,3.5v7.5h5v-3h-2V3.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v4.5h-9v3h12V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonClimbing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.287,12.966l.713,3.034v5h-3v-4.815l-.623-2.491c-.017-.068-.045-.132-.068-.198l-3.146,3.862c-.896,1.059-2.093,1.632-3.207,1.644h-4.148l-2.617,3.413-2.381-1.826,3.518-4.587h3.408l.065-.079-1.921-1.921H5v-3h6.121l2.595,2.595,2.902-3.523-3.618-2.842V2.121L3,12.121v11.879H0V10.879L10.879,0h5.121V5.771l5.35,4.203c.956,.752,1.644,1.814,1.938,2.992Zm-1.787-4.966c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RewindButtonCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.984,12l4.016-3.259v6.519l-4.016-3.259Zm-.984,3.26v-6.519l-4.03,3.27,4.03,3.249Zm13-3.26c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6-3.358c0-.743-.412-1.411-1.075-1.745-.664-.333-1.446-.266-2.042,.176l-1.883,1.527c-.015-.726-.424-1.376-1.075-1.704-.663-.333-1.446-.265-2.076,.203l-4.105,3.332c-.501,.372-.789,.944-.789,1.569s.288,1.196,.755,1.541l4.173,3.386c.597,.442,1.378,.509,2.042,.176,.651-.328,1.06-.978,1.075-1.704l1.883,1.528c.345,.256,.752,.386,1.162,.386,.299,0,.6-.069,.88-.21,.663-.334,1.075-1.002,1.075-1.745v-6.717Z"/>
</svg>

);

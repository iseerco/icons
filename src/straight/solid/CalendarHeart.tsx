import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,10v14h24v-14H0Zm12.542,10.841l-.542.349-.542-.349c-.457-.294-4.458-2.952-4.458-5.681,0-1.743,1.346-3.16,3-3.16.782,0,1.477.27,2,.727.523-.457,1.218-.727,2-.727,1.654,0,3,1.417,3,3.16,0,2.729-4.002,5.386-4.458,5.681ZM0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm15,7.16c0,1.04-1.611,2.617-3,3.626-1.389-1.01-3-2.586-3-3.626,0-.64.449-1.16,1-1.16.498,0,1,.309,1,1h2c0-.691.502-1,1-1,.551,0,1,.521,1,1.16Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandMineOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.368,22l-.632-4.425c-.21-1.468-1.486-2.575-2.97-2.575h-1.766v-4H7v4h-1.766c-1.483,0-2.76,1.107-2.97,2.575l-.632,4.425H0v2H24v-2h-1.632ZM9,13h6v2h-6v-2Zm-4.755,4.858c.069-.489,.495-.858,.989-.858h13.531c.494,0,.92,.369,.989,.858l.592,4.142H3.653l.592-4.142ZM13,7h-2V0h2V7Zm5.207,2.207l-1.414-1.414,5-5,1.414,1.414-5,5Zm-12.414,0L.793,4.207l1.414-1.414L7.207,7.793l-1.414,1.414Z"/>
</svg>

);

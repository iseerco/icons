import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CirclePhoneHangup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm-3,12v-2.593c1.022-.458,1.997-.692,3-.686,.953,.006,1.932,.23,3,.686v2.593h4v-2.023c0-.768-.323-1.456-.827-1.96-1.38-1.38-3.783-2.028-6.173-2.017-2.44,.011-4.865,.709-6.173,2.017-.504,.504-.828,1.192-.827,1.96v2.023h4Z"/></svg>

);

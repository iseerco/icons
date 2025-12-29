import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopMobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.91,13h2.09v2h-2.91l-1-1H2v1c0,.55,.45,1,1,1H12v2H3c-1.65,0-3-1.35-3-3v-3H2V0H22V7h-2V2H4V12h4.91l1,1Zm14.09-1v12H14V12c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3Zm-2,0c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v10h6V12Z"/></svg>

);

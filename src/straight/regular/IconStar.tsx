import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IconStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,7H0V3C0,1.35,1.35,0,3,0H7V2H3c-.55,0-1,.45-1,1V7Zm0,14v-4H0v4c0,1.65,1.35,3,3,3H7v-2H3c-.55,0-1-.45-1-1Zm20,0c0,.55-.45,1-1,1h-4v2h4c1.65,0,3-1.35,3-3v-4h-2v4ZM21,0h-4V2h4c.55,0,1,.45,1,1V7h2V3c0-1.65-1.35-3-3-3Zm-3,10.92v-.92h-4.33l-1.18-4.5h-.97l-1.18,4.5H6v.92l3.32,1.85-1.3,4.08,.72,.54,3.27-2.53,3.26,2.52,.75-.52-1.33-4.03,3.3-1.91Z"/></svg>

);

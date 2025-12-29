import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5V24H8.918l-3.667-3.351L.747,16.609c-.866-.722-.983-2.008-.261-2.874,.722-.866,2.008-.983,2.874-.261l2.64,2.296V3.5c0-.911,.799-1.632,1.739-1.479,.737,.12,1.248,.812,1.248,1.56V19.999l1.095,1.001h10.918V3.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5ZM14,1.5c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5V11h3V1.5Zm5,0c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5V11h3V1.5Zm-7.994,13.66c0,2.262,4,5.04,4,5.04,0,0,4-2.778,4-5.04,0-1.193-.895-2.16-2-2.16s-2,.771-2,1.964c0-1.193-.895-1.964-2-1.964s-2,.967-2,2.16Z"/></svg>

);

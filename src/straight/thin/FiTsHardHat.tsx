import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHardHat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,17h-1v-4.671c0-4.802-3.285-9.037-8-10.341v-.988h-6v.988C4.285,3.292,1,7.527,1,12.329v4.671H0v1h1.251c.761.973,4.299,5,10.749,5s9.987-4.027,10.748-5h1.252v-1Zm-2-4.671v4.671h-7V3.034c4.138,1.268,7,5.033,7,9.295ZM14,2v15h-4V2h4ZM2,12.329c0-4.262,2.862-8.026,7-9.295v13.966H2v-4.671Zm10,9.671c-4.959,0-8.118-2.642-9.415-4h18.83c-1.297,1.358-4.456,4-9.415,4Z"/>
</svg>

);

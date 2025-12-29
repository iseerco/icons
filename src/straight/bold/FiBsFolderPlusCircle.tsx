import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderPlusCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm4,7h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Zm2-13.5v7.221c-.815-.926-1.838-1.663-3-2.134v-3.587H3v12h7.069c.135,1.083,.486,2.096,1.01,3H0V3.5C0,1.57,1.57,0,3.5,0h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Z"/>
</svg>

);

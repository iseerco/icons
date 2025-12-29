import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderXmarkCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,5.5v7.221c-.815-.926-1.838-1.663-3-2.134v-3.587H3v12h7.069c.135,1.083,.486,2.096,1.01,3H0V3.5C0,1.57,1.57,0,3.5,0h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Zm0,12.5c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-4.586,0l2.121-2.121-1.414-1.414-2.121,2.121-2.121-2.121-1.414,1.414,2.121,2.121-2.121,2.121,1.414,1.414,2.121-2.121,2.121,2.121,1.414-1.414-2.121-2.121Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FunctionSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,5h1v2h-1c-.551,0-1,.448-1,1v3h2v2h-2v6h-2v-6h-2v-2h2v-3c0-1.654,1.346-3,3-3Zm7.022,6l-1.272,2.08-1.272-2.08h-2.331l2.431,3.997-2.431,4.003h2.327l1.276-2.087,1.276,2.087h2.327l-2.431-4.003,2.431-3.997h-2.331Zm6.978-8v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v19h20V3Z"/>
</svg>

);

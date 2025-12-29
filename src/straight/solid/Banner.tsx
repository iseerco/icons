import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.699,18.055l-2.342-.32c-2.005-.274-5.888-.734-9.357-.734s-7.353.46-9.357.734l-2.342.32,4.363-5.932L.082,7.142l1.878-.271c2.757-.397,6.735-.871,10.04-.871s7.283.474,10.04.871l1.878.271-4.582,4.981,4.363,5.932Z"/>
</svg>

);

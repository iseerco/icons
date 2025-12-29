import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SimCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.828,4.414l-3.242-3.242c-.755-.756-1.76-1.172-2.829-1.172h-7.757c-1.654,0-3,1.346-3,3v21h18V7.243c0-1.068-.416-2.073-1.172-2.829ZM7,14c0-1.105.895-2,2-2h1v3h-3v-1Zm5,6h-3c-1.105,0-2-.895-2-2v-1h5v3Zm5-2c0,1.105-.895,2-2,2h-1v-3h3v1Zm0-3h-5v-3h3c1.105,0,2,.895,2,2v1Z"/>
</svg>

);

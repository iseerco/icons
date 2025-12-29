import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SimCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.828,4.414l-3.242-3.242c-.755-.756-1.76-1.172-2.829-1.172h-7.757c-1.654,0-3,1.346-3,3v21h18V7.243c0-1.068-.416-2.073-1.172-2.829Zm-.828,17.586H5V3c0-.551.449-1,1-1h7.757c.534,0,1.037.208,1.415.586l3.242,3.242c.378.378.586.88.586,1.415v14.757Zm-12-5h5v3h-3c-1.105,0-2-.895-2-2v-1Zm7,0h3v1c0,1.105-.895,2-2,2h-1v-3Zm3-3v1h-5v-3h3c1.105,0,2,.895,2,2Zm-7,1h-3v-1c0-1.105.895-2,2-2h1v3Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LockHashtag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.765,17l.235-2h-1.958l.24-2h-2.012l-.24,2h-3.155l.24-2h-2.012l-.24,2h-2.363l-.235,2h2.358l-.36,3h-2.2l-.235,2h2.195l-.24,2h2.012l.24-2h3.155l-.24,2h2.012l.24-2h2.126l.235-2h-2.121l.36-3h1.963Zm-4.335,3h-3.155l.36-3h3.155l-.36,3Zm.57-12h-3v-1c0-3.86-3.14-7-7-7S3,3.14,3,7v1H0v13.5c0,1.378,1.122,2.5,2.5,2.5h7.078l.769-6h-1.347v-4h1.859l.384-3h8.756v-3Zm-5,0H5v-1c0-2.757,2.243-5,5-5s5,2.243,5,5v1Z"/>
</svg>

);

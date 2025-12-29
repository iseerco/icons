import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pickaxe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.984,18.985c0-5.689-1.484-10.142-4.24-13.315l1.713-1.713-1.414-1.414-1.712,1.712C15.157,1.49,10.698,0,5,0v1.999c3.654.685,7.297,2.634,10.287,5.299L.075,22.511l1.414,1.414,15.211-15.211c2.658,2.987,4.601,6.624,5.285,10.271h1.999Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.918,7.142l-1.878-.271c-2.757-.397-6.735-.871-10.04-.871s-7.283.474-10.04.871l-1.878.271,4.582,4.981L.301,18.055l2.342-.32c2.005-.274,5.888-.734,9.357-.734s7.353.46,9.357.734l2.342.32-4.363-5.932,4.582-4.981Zm-11.918,7.858c-2.508,0-5.21.23-7.312.465l2.563-3.484-3.116-3.387c2.443-.31,5.366-.594,7.864-.594s5.421.284,7.864.594l-3.116,3.387,2.563,3.484c-2.102-.235-4.804-.465-7.312-.465Z"/>
</svg>

);

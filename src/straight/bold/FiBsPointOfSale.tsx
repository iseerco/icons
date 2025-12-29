import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPointOfSale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,5h8v4H7v-4Zm0,9h3v-3h-3v3Zm5,0h3v-3h-3v3Zm-5,5h3v-3h-3v3Zm5,0h3v-3h-3v3Zm10,1h-2v4H2V3.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5v.5h2v16ZM17,3.5c0-.275-.225-.5-.5-.5H5.5c-.276,0-.5.225-.5.5v17.5h12V3.5Z"/>
</svg>

);

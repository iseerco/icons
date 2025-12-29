import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPalletAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,16h24v6h-3v-3h-7.5v3h-3v-3H3v3H0v-6Zm12-2H0V5.5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v8.5Zm-3-8.5c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v5.5h6v-5.5Zm15,2v6.5h-10v-6.5c0-1.93,1.57-3.5,3.5-3.5h3c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.225-.5-.5-.5h-3c-.275,0-.5.225-.5.5v3.5h4v-3.5Z"/>
</svg>

);

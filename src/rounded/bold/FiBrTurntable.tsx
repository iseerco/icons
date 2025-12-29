import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTurntable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,2H5.5C2.467,2,0,4.468,0,7.5v9c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.467-5.5-5.5-5.5Zm2.5,14.5c0,1.379-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5V7.5c0-1.379,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.121,2.5,2.5v9Zm-2-8v5c0,.232-.054.463-.158.671l-1,2c-.263.525-.793.829-1.343.829-.226,0-.455-.051-.67-.158-.741-.371-1.041-1.271-.671-2.013l.842-1.684v-4.646c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5Zm-9-1.5c-2.761,0-5,2.239-5,5s2.239,5,5,5,5-2.239,5-5-2.239-5-5-5Zm0,6.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/>
</svg>

);

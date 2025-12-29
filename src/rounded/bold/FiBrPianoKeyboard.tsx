import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,2H5.5C2.467,2,0,4.467,0,7.5v9c0,3.033,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.467-5.5-5.5-5.5Zm-13,3h13c1.378,0,2.5,1.122,2.5,2.5v2.5H3v-2.5c0-1.378,1.122-2.5,2.5-2.5Zm13,14H5.5c-1.378,0-2.5-1.122-2.5-2.5v-3.5h2v2.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-2.5h2v2.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-2.5h3v2.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-2.5h2v3.5c0,1.378-1.122,2.5-2.5,2.5Z"/>
</svg>

);

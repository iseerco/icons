import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JournalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,0h-2v2h-2V0h-2v2h-2V0h-2v2h-2V0H1v2H0v19c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V2h-1V0Zm-1,21c0,.552-.449,1-1,1H3c-.551,0-1-.448-1-1V4h12v17Zm-2-12H4v-2h8v2Zm0,4H4v-2h8v2Zm-3,4h-5v-2h5v2ZM21,0c-1.654,0-3,1.346-3,3v17.914l3,3,3-3V3c0-1.654-1.346-3-3-3Zm1,20.086l-1,1-1-1V3c0-.552.449-1,1-1s1,.448,1,1v17.086Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TvRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,6h-6.858l4.575-4.575L17.303.011l-5.303,5.304L6.697.011l-1.414,1.414,4.575,4.575H3c-1.654,0-3,1.346-3,3v15h24v-15c0-1.654-1.346-3-3-3Zm-5,15H3v-12h13v12Zm5,0h-2v-2h2v2Zm0-5h-2v-2h2v2Zm0-5h-2v-2h2v2Zm-7,8H5v-8h9v8Z"/>
</svg>

);

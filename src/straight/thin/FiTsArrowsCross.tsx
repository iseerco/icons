import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.108,10.815L.043,.75,.75,.043,10.815,10.108l-.707,.707Zm12.892,11.478L13.905,13.198l-.707,.707,9.095,9.095h-6.293v1h6.5c.827,0,1.5-.673,1.5-1.5v-6.5h-1v6.293ZM22.5,0h-6.5V1h6.293L.043,23.25l.707,.707L23,1.707v6.293h1V1.5c0-.827-.673-1.5-1.5-1.5Z"/></svg>

);

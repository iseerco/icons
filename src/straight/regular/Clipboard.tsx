import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clipboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,2h-2.171c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2h-2.171c-1.654,0-3,1.346-3,3v19h18V5c0-1.654-1.346-3-3-3Zm-7,0h2c.552,0,1,.449,1,1s-.448,1-1,1h-2c-.552,0-1-.449-1-1s.448-1,1-1Zm8,20H5V5c0-.551.448-1,1-1h2.172c.413,1.164,1.524,2,2.828,2h2c1.304,0,2.415-.836,2.828-2h2.172c.552,0,1,.449,1,1v17Z"/></svg>

);

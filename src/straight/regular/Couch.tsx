import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Couch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9h-2v-3c0-2.757-2.243-5-5-5H7c-2.757,0-5,2.243-5,5v3H0v12h2v2h2v-2h16v2h2v-2h2v-12ZM7,3h10c1.654,0,3,1.346,3,3v3.172c-1.164.413-2,1.524-2,2.828v2H6v-2c0-1.304-.836-2.415-2-2.828v-3.172c0-1.654,1.346-3,3-3Zm15,16H2v-8h1c.551,0,1,.449,1,1v4h16v-4c0-.551.449-1,1-1h1v8Z"/>
</svg>

);

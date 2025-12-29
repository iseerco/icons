import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blinds = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.172V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V22H16.101c-.066-.323-.101-.657-.101-1s.035-.677,.101-1H2v-2h15.023c.28-.37,.607-.698,.977-.977V2h1c.552,0,1,.449,1,1v15.172c-1.164,.413-2,1.524-2,2.828,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.304-.836-2.415-2-2.828Zm-6-10.172H2v-2h14v2Zm0,2v2H2v-2h14Zm0,6H2v-2h14v2Zm0-12H2v-1c0-.551,.448-1,1-1h13v2Zm5,18c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"/></svg>

);

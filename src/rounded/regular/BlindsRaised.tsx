import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsRaised = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.172V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5H15c.552,0,1-.447,1-1s-.448-1-1-1H5c-1.654,0-3-1.346-3-3V10h15c.552,0,1-.447,1-1V2.172c1.164,.413,2,1.524,2,2.828v13.172c-1.164,.413-2,1.524-2,2.828,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.304-.836-2.415-2-2.828ZM5,2h11v2H2.172c.413-1.164,1.524-2,2.828-2Zm-3,6v-2h14v2H2Zm19,14c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Z"/></svg>

);

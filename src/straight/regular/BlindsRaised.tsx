import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsRaised = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.172V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H17.023c-.441-.584-.771-1.256-.922-2H2V10H18V2h1c.551,0,1,.448,1,1v15.172c-1.164,.413-2,1.524-2,2.828,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.304-.836-2.415-2-2.828ZM2,8v-2h14v2H2Zm14-4H2v-1c0-.552,.449-1,1-1h13v2Zm5,18c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Z"/></svg>

);

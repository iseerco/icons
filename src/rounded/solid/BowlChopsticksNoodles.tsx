import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BowlChopsticksNoodles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.199,11.599c-.761-1.016-1.927-1.599-3.197-1.599h-7.997v-2.993h10.995c.552,0,1-.447,1-1s-.448-1-1-1h-10.995v-1.421l10.983-.58c.552-.029.975-.5.946-1.052s-.497-.968-1.051-.946L3.946,2.008c-.552.029-.975.5-.946,1.052.028.533.47.947.998.947.018,0,.036,0,.054,0l.954-.05v1.051h-1.007c-.552,0-1,.447-1,1s.448,1,1,1h1.007v2.993h-.999c-1.27,0-2.435.582-3.196,1.598C.042,12.622-.191,13.917.168,15.149c.708,2.421,1.989,4.605,3.708,6.317,1.617,1.609,3.901,2.533,6.268,2.533h3.722c2.366,0,4.65-.924,6.268-2.534,1.719-1.711,3-3.896,3.707-6.316.36-1.232.126-2.526-.642-3.551ZM7.005,3.85l3-.158v1.315h-3v-1.157Zm0,3.157h3v2.993h-3v-2.993Z"/></svg>

);

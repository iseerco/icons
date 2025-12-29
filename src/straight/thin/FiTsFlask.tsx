import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFlask = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,9.434V1h2V0H5v1h2v8.434c-1.854,1.646-7,6.597-7,10.781,0,2.233,1.732,3.434,2.649,3.757l18.621.028c.917-.323,2.729-1.553,2.729-3.786,0-4.184-5.146-9.135-7-10.781Zm4.09,13.566H2.91c-.363-.153-1.91-.916-1.91-2.786,0-1.339.638-2.811,1.529-4.214h16.509c-.248-.333-.514-.667-.792-1H3.213c1.73-2.37,4.12-4.531,4.787-5.114V1h8v8.886c1.141.998,7,6.328,7,10.328,0,1.87-1.547,2.632-1.91,2.786Z"/>
</svg>

);

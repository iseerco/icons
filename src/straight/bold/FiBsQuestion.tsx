import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsQuestion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,19h-3v-.786c0-2.371,1.388-4.442,3.909-5.832,1.905-1.05,2.891-3.131,2.51-5.301-.352-2.003-1.997-3.648-4-4-1.513-.265-2.979,.121-4.131,1.087-1.136,.954-1.787,2.351-1.787,3.832h-3c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.287,13.437,.126c3.224,.566,5.871,3.213,6.437,6.437,.597,3.399-1.018,6.794-4.017,8.447-1.564,.862-2.357,1.939-2.357,3.204v.786Zm0,2h-3v3h3v-3Z"/></svg>

);

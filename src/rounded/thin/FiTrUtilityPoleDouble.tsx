import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrUtilityPoleDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.5,3h9.5c1.103,0,2-.897,2-2v-.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v.5c0,.551-.448,1-1,1h-2V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-6.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-6.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-2c-.551,0-1-.449-1-1v-.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v.5c0,1.103.897,2,2,2h9.5v4h-6.5v-1.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-2c-.551,0-1-.449-1-1v-.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v.5c0,1.103.897,2,2,2h2.293l7.207,7.207v8.293c0,.276.224.5.5.5s.5-.224.5-.5v-8.293l7.207-7.207h2.293c1.103,0,2-.897,2-2v-.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v.5c0,.551-.448,1-1,1h-2v-1.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-6.5V3Zm-6.793,5h5.793v5.793l-5.793-5.793Zm12.586,0l-5.793,5.793v-5.793h5.793Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrUtilityPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,0c-.276,0-.5.224-.5.5v.5c0,.551-.449,1-1,1h-2V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-6.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-6.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-2c-.551,0-1-.449-1-1v-.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v.5c0,1.103.897,2,2,2h2.293l7.207,7.207v13.293c0,.276.224.5.5.5s.5-.224.5-.5v-13.293l7.207-7.207h2.293c1.103,0,2-.897,2-2v-.5c0-.276-.224-.5-.5-.5ZM5.707,3h5.793v5.793L5.707,3Zm6.793,0h5.793l-5.793,5.793V3Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrainStationBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.986,12l-3.486-5h-3.55c.017-.167.05-.329.05-.5,0-2.239-1.471-4.134-3.5-4.771V0h-3v1.729c-2.029.637-3.5,2.532-3.5,4.771,0,.171.034.333.05.5h-3.55L.014,12h-.014v12h9v-4c0-1.654,1.346-3,3-3s3,1.346,3,3v4h9v-12h-.014Zm-11.986-7.5c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm9,16.5h-3v-1c0-3.309-2.691-6-6-6s-6,2.691-6,6v1h-3v-9h18v9Z"/>
</svg>

);

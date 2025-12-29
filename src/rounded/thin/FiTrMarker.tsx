import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMarker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,24c-1.217,0-2.513-.644-3.383-1.679C4.35,17.245,2,12.869,2,10,2,4.486,6.486,0,12,0s10,4.486,10,10c0,2.869-2.35,7.245-6.617,12.321-.869,1.035-2.166,1.679-3.383,1.679ZM12,1C7.038,1,3,5.038,3,10c0,2.595,2.327,6.852,6.383,11.678,.674,.803,1.702,1.321,2.617,1.321s1.942-.519,2.617-1.321c4.057-4.826,6.383-9.083,6.383-11.678,0-4.963-4.037-9-9-9Z"/>
  <path d="M12,14c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm0-7c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Z"/>
</svg>

);

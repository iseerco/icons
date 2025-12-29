import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRewindButtonCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.037,9-9,9Zm4.955-12.504v7.008c0,.817-.931,1.285-1.587,.798l-3.368-2.5v1.701c0,.817-.931,1.285-1.587,.798l-4.721-3.504c-.536-.398-.536-1.199,0-1.597l4.721-3.504c.656-.487,1.587-.019,1.587,.799v1.701l3.368-2.5c.656-.487,1.587-.019,1.587,.799Z"/>
</svg>

);

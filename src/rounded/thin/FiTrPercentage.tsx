import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPercentage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.5,24c-.128,0-.256-.049-.354-.146-.195-.195-.195-.512,0-.707L23.146,.146c.195-.195,.512-.195,.707,0s.195,.512,0,.707L.854,23.854c-.098,.098-.226,.146-.354,.146ZM9,5c0-2.206-1.794-4-4-4S1,2.794,1,5s1.794,4,4,4,4-1.794,4-4Zm-1,0c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Zm15,14c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Zm-1,0c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Z"/></svg>

);

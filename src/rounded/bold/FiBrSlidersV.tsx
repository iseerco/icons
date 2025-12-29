import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSlidersV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5,7.5c0,1.394-.821,2.587-2,3.15v11.85c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-11.85c-1.179-.563-2-1.756-2-3.15s.821-2.587,2-3.15V1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v2.85c1.179.563,2,1.756,2,3.15Zm6,5.85V1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v11.85c-1.179.563-2,1.756-2,3.15s.821,2.587,2,3.15v2.85c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-2.85c1.179-.563,2-1.756,2-3.15s-.821-2.587-2-3.15Zm10-5.85c0-1.394-.821-2.587-2-3.15V1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v2.85c-1.179.563-2,1.756-2,3.15s.821,2.587,2,3.15v11.85c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-11.85c1.179-.563,2-1.756,2-3.15Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrHeartHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.61,23c-.52,0-1.02-.18-1.43-.52C4.98,18.91,0,13.71,0,9.05c-.07-1.96,.61-3.84,1.87-5.15,1.2-1.24,2.8-1.9,4.64-1.9,2.28,.05,4.37,1.31,5.47,3.29,.01,0,1.01,1.43,1.02,3.74h0v11.56c0,.94-.54,1.78-1.4,2.18-.32,.15-.66,.22-.99,.22ZM6.51,3c-1.55,0-2.9,.55-3.91,1.59-1.08,1.12-1.66,2.74-1.59,4.44,0,4.52,5.51,9.87,8.79,12.65,.4,.34,.91,.4,1.38,.18,.4-.19,.83-.62,.83-1.28V9.03c0-1.97-.85-3.2-.86-3.21-.96-1.72-2.72-2.79-4.63-2.83Z"/></svg>

);

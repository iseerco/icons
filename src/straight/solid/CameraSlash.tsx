import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,14c0-.233.027-.461.077-.681l3.604,3.604c-.22.051-.448.077-.681.077-1.654,0-3-1.346-3-3Zm5.235,4.477c-.678.337-1.439.523-2.235.523-2.757,0-5-2.243-5-5,0-.796.186-1.556.523-2.235L1.762,6.005c-.474.531-.762,1.23-.762,1.995v15h17.758l-4.523-4.523Zm9.722,4.066l-1.414,1.414L.043,1.457,1.457.043l4.957,4.957h13.586c1.654,0,3,1.346,3,3v13.586l.957.957Zm-6.957-8.543c0-2.757-2.243-5-5-5-.474,0-.94.066-1.39.196l6.194,6.194c.13-.45.196-.915.196-1.39Zm-.363-11l-1.386-2h-6.512l-1.341,2h9.239Z"/>
</svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0h-5.171c-.801,0-1.555.312-2.122.879l-1.828,1.828c-.189.188-.44.293-.708.293h-2.171v-1c0-.553-.448-1-1-1s-1,.447-1,1v1C2.243,3,0,5.243,0,8v11c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM5,5h4.171c.801,0,1.555-.312,2.122-.879l1.828-1.828c.189-.188.44-.293.708-.293h5.171c1.654,0,3,1.346,3,3v7h-4.084c-.477-2.834-2.948-5-5.916-5s-5.439,2.166-5.916,5H2v-4c0-1.654,1.346-3,3-3Zm11,8c0,2.206-1.794,4-4,4s-4-1.794-4-4,1.794-4,4-4,4,1.794,4,4Zm3,9H5c-1.654,0-3-1.346-3-3v-5h4.084c.477,2.834,2.948,5,5.916,5s5.439-2.166,5.916-5h4.084v5c0,1.654-1.346,3-3,3Z"/></svg>

);

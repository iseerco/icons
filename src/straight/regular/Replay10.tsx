import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Replay10 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,6h2v7H7v-2h4V6ZM2,9H7v-2H3.335c1.765-3.079,5.025-5,8.665-5,5.514,0,10,4.486,10,10,0,.371-.039,.733-.078,1.093,.706,.132,1.358,.411,1.926,.807,.099-.619,.152-1.253,.152-1.9C24,5.383,18.617,0,12,0,7.89,0,4.189,2.044,2,5.362V2H0V7c0,1.103,.897,2,2,2Zm14.324,6.083c-.408-.17-.878-.077-1.208,.253l-2.839,2.972,1.445,1.382,1.277-1.337v5.646h2v-7.905c0-.444-.266-.841-.676-1.011ZM2,12H0c0,6.617,5.383,12,12,12,.338,0,.669-.023,1-.051v-2c-.329,.033-.662,.051-1,.051-5.514,0-10-4.486-10-10Zm22,6v3c0,1.654-1.346,3-3,3s-3-1.346-3-3v-3c0-1.654,1.346-3,3-3s3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1s-1,.449-1,1v3c0,.551,.448,1,1,1s1-.449,1-1v-3Z"/>
</svg>

);

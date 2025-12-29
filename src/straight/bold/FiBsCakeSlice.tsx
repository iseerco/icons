import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCakeSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.511,9.633c-.78-1.53-3.047-5.428-7.254-8.573C15.312.353,14.177,0,12.983,0c-1.073.012-2.115.335-3.012.933L0,10.879v13.121h24v-12.325c0-.717-.165-1.403-.489-2.042ZM11.747,3.358c.386-.23.822-.354,1.27-.358.511-.02,1.03.154,1.444.463,3.702,2.767,5.693,6.189,6.377,7.531,0,.002.001.004.002.006H4.119l7.628-7.642Zm9.253,10.642v2H3v-2h18ZM3,21v-2h18v2H3Z"/>
</svg>

);

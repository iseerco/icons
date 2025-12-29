import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookmarkSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.707,22.293l-2.707-2.707V6c0-2.757-2.243-5-5-5H8c-1.485,0-2.876.66-3.816,1.77L1.707.293C1.316-.098.683-.098.292.293S-.098,1.316.292,1.707l22,22c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414ZM8,3h8c1.654,0,3,1.346,3,3v11.586L5.606,4.192c.563-.744,1.447-1.192,2.394-1.192Zm4.239,14.173l-4.512,4.954c-.537.57-1.258.871-1.995.872-.339,0-.681-.064-1.011-.195-1.046-.416-1.722-1.411-1.722-2.537v-11.267c0-.552.448-1,1-1s1,.448,1,1v11.267c0,.447.322.623.46.679.138.055.494.147.801-.178l4.5-4.94c.372-.408,1.003-.439,1.413-.066.408.372.438,1.004.066,1.412Z"/></svg>

);

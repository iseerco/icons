import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIssueLoupe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.994,21.873l-5.947-5.947c1.225-1.66,1.959-3.703,1.959-5.92C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.217,0,4.26-.734,5.92-1.959l5.947,5.947,2.121-2.121Zm-13.988-4.867c-3.859,0-7-3.14-7-7s3.141-7,7-7,7,3.14,7,7-3.141,7-7,7Zm-1.006-4.006h2v2h-2v-2Zm4-5c0,1.125-.621,2.146-1.621,2.665-.227.118-.379.425-.379.765v.571h-2v-.571c0-1.1.559-2.073,1.458-2.54.335-.173.542-.514.542-.889,0-.551-.448-1-1-1s-1,.449-1,1h-2c0-1.654,1.346-3,3-3s3,1.346,3,3Z"/>
</svg>

);

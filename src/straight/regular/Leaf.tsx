import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Leaf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.913.049C22.357.075,9.262.72,4.862,5.12A9.931,9.931,0,0,0,4.191,18.4L0,22.591,1.415,24l4.19-4.184a9.93,9.93,0,0,0,13.281-.672c4.488-4.487,5.05-17.5,5.071-18.056L24,0ZM17.472,17.73a7.929,7.929,0,0,1-10.444.662l9.637-9.637L15.251,7.341,5.614,16.978A7.929,7.929,0,0,1,6.276,6.534C9.455,3.355,18.683,2.372,21.891,2.122,21.657,5.315,20.716,14.486,17.472,17.73Z"/></svg>

);

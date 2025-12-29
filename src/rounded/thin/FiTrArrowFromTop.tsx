import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.939,22.561l-5.086-5.086c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l5.085,5.086c.472,.473,1.1,.732,1.768,.732s1.295-.26,1.768-.732l5.086-5.086c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-5.086,5.086c-.159,.159-.354,.262-.561,.332V1h6c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H5.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6V22.892c-.207-.07-.402-.173-.561-.332Z"/></svg>

);

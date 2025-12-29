import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrInputNumeric = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,7.5v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7.793l-1.146,1.146c-.195.195-.512.195-.707,0s-.195-.512,0-.707l2-2c.143-.144.358-.186.545-.108s.309.26.309.462Zm17,0v9c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V7.5C0,5.019,2.019,3,4.5,3h15c2.481,0,4.5,2.019,4.5,4.5Zm-1,0c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v9c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V7.5Z"/></svg>

);

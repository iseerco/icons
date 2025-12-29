import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRouter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,15h-3.5v-5h-3v5H3.5c-1.93,0-3.5,1.57-3.5,3.5v5.5h24v-5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,6H3v-2.5c0-.275.224-.5.5-.5h17c.275,0,.5.225.5.5v2.5Zm-.818-14.061l-2.121,2.121c-1.412-1.411-3.709-1.411-5.121,0l-2.121-2.121c2.581-2.582,6.781-2.582,9.363,0Zm-10.864-1.379l-2.121-2.121c4.578-4.578,12.028-4.578,16.606,0l-2.121,2.121c-3.408-3.409-8.955-3.407-12.364,0Z"/>
</svg>

);

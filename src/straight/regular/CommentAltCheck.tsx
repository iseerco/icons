import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.298,6.289l1.404,1.423-6.792,6.707c-.387.387-.897.581-1.408.581s-1.025-.195-1.416-.585l-3.785-3.699,1.397-1.431,3.793,3.707,6.806-6.703Zm6.702-3.289v17h-6.852l-3.847,3.18c-.362.322-.825.484-1.293.484-.476,0-.955-.168-1.337-.507l-3.748-3.157H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1v15h5.654l4.326,3.645,4.448-3.645h5.572V3Z"/></svg>

);

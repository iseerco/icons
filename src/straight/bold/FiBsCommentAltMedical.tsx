import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentAltMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5,8.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Zm10.526-5v16.5h-6.672l-3.708,3.066c-.448.398-1.024.6-1.606.6-.595,0-1.195-.21-1.674-.635l-3.599-3.031H.026V3.5C.026,1.57,1.596,0,3.526,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.224-.5-.5-.5H3.526c-.276,0-.5.224-.5.5v13.5h4.836l4.167,3.511,4.245-3.511h4.751V3.5Z"/></svg>

);

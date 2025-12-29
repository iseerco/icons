import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentAltMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.975,8.5h10v3H6.975v-3ZM24,3.5v16.5h-6.672l-3.708,3.066c-.448.398-1.024.6-1.606.6-.595,0-1.195-.21-1.674-.635l-3.6-3.031H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5.224-.5.5v13.5h4.836l4.168,3.511,4.244-3.511h4.752V3.5Z"/></svg>

);

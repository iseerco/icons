import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrQ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9.909C21.497-3.221,2.498-3.211,2,9.909v4.182c-.118,8.518,10.566,13.086,16.718,7.334l2.429,2.429c.452,.466,1.173-.255,.707-.707l-2.427-2.427c1.599-1.757,2.574-4.082,2.574-6.629v-4.182Zm-1,4.182c0,2.271-.863,4.346-2.281,5.921l-3.865-3.865c-.452-.466-1.172,.255-.707,.707l3.863,3.863c-5.547,5.128-15.116,1.008-15.01-6.626v-4.182c.453-11.805,17.551-11.796,18,0v4.182Z"/></svg>

);

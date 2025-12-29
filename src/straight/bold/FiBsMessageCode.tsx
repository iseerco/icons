import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.271,8.238c.969,.969,.97,2.548,.001,3.519l-3.3,3.299-2.121-2.121,2.937-2.937-2.937-2.938,2.121-2.121,3.299,3.299Zm-9.244-3.299l-3.299,3.299c-.969,.969-.97,2.548,0,3.52l3.299,3.298,2.121-2.121-2.937-2.937,2.937-2.938-2.121-2.121Zm14.972-1.439V20h-6.671l-3.708,3.066c-.449,.398-1.025,.6-1.607,.6-.594,0-1.194-.21-1.672-.634l-3.6-3.032H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5,.225-.5,.5v13.5H7.836l4.167,3.512,4.245-3.512h4.751V3.5Z"/></svg>

);

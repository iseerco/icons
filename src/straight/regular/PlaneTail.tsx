import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlaneTail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.382,16.622c-.187-.078-2.124-.87-5.039-1.777L22.302,0h-4.302c-.939,0-1.837,.448-2.399,1.2l-6.301,8.4c-1.127,1.502-2.921,2.399-4.8,2.399H0v2H2c7.77,0,16.282,2.852,19.394,4-3.111,1.148-11.624,4-19.394,4H0v2H2c10.083,0,20.926-4.433,21.382-4.622l.618-.255v-2.246l-.618-.255Zm-12.482-5.822L17.2,2.399c.188-.25,.486-.399,.8-.399h1.698l-3.273,12.275c-2.187-.619-4.737-1.233-7.423-1.667,.721-.49,1.365-1.098,1.897-1.808Zm3.101,6.2v2H7v-2h7Z"/></svg>

);

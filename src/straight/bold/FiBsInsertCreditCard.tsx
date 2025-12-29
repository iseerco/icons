import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsInsertCreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16,17.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm5-8.776v15.276H3V8.724c-1.742-.621-3-2.271-3-4.224C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5,0,1.953-1.258,3.602-3,4.224ZM6,21h2V3h-2V21Zm12,0V3h-7V21h7Z"/>
</svg>

);

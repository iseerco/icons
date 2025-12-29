import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,15h3v3h-3v-3Zm5,3h3v-3h-3v3Zm0,5h3v-3h-3v3Zm-15,0h3v-3H3v3Zm5-8v3h3v-3h-3Zm-5,3h3v-3H3v3Zm5,5h8v-3H8v3ZM24,8.467v4.533H15v-3.449c-1.071-.377-2.009-.546-3.008-.551-1.013,.025-1.953,.159-2.992,.536v3.464H0v-4.534c-.001-1.495,.596-2.917,1.681-4.001C3.995,2.151,7.998,1,12,1s8.005,1.15,10.319,3.465c1.085,1.085,1.682,2.506,1.681,4.002Zm-3,0c0-.695-.284-1.362-.802-1.88-3.723-3.721-13.233-3.163-16.396,0-.518,.518-.802,1.185-.802,1.879v1.535h3v-2.443l.887-.397c1.81-.811,3.35-1.187,5.113-1.159,1.674,.009,3.248,.363,5.089,1.148l.911,.39v2.462h3v-1.534Z"/></svg>

);

import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,9v6.612l-3-3-3,3v-6.612c0-.551.448-1,1-1h4c.552,0,1,.449,1,1Zm9,3c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-7-3c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7.271c0,.701.418,1.327,1.066,1.595.647.271,1.386.121,1.882-.374l2.052-2.052,2.052,2.052c.331.331.771.507,1.22.507.223,0,.447-.043.662-.133.648-.268,1.066-.894,1.066-1.595v-7.271Z"/></svg>

);

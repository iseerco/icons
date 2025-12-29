import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HotTub = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.293,3.707c-.834-.833-1.293-1.942-1.293-3.121V0h2V.586c0,.635,.258,1.258,.707,1.707,.834,.833,1.293,1.942,1.293,3.121v1.586h-2v-1.586c0-.635-.258-1.258-.707-1.707Zm-3.293,2.707v1.586h2v-1.586c0-1.179-.459-2.288-1.293-3.121-.449-.449-.707-1.072-.707-1.707V0h-2V1.586c0,1.179,.459,2.288,1.293,3.121,.449,.449,.707,1.072,.707,1.707Zm-4.979,5.586l-2.306-3.293c-.747-1.068-1.972-1.707-3.277-1.707h-1.438c-1.654,0-3,1.346-3,3v2H0v9c0,1.654,1.346,3,3,3V14h2v10h3V14h2v10h4V14h2v10h3V14h2v10c1.654,0,3-1.346,3-3V12H12.021ZM5.5,5c1.381,0,2.5-1.119,2.5-2.5S6.881,0,5.5,0,3,1.119,3,2.5s1.119,2.5,2.5,2.5Z"/></svg>

);

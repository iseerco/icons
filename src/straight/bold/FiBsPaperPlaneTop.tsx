import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPaperPlaneTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.578.33C3.408-.244,2.025-.053,1.056.82.087,1.692-.25,3.048.197,4.272l4.106,7.734L.275,19.733c-.445,1.226-.105,2.58.865,3.45.598.536,1.352.813,2.115.813.477,0,.958-.108,1.407-.329l19.232-11.671L4.578.33Zm-1.577,2.854c-.004-.038.007-.084.062-.133.065-.058.119-.055.157-.043l12.398,7.492H6.9L3.001,3.184Zm.299,17.809c-.039.013-.093.015-.156-.042-.056-.05-.066-.098-.062-.136l3.827-7.314h8.731l-12.339,7.492Z"/></svg>

);

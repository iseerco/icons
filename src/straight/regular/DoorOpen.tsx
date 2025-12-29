import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoorOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,22V5c0-1.654-1.346-3-3-3h-1.171c-.18-.51-.497-.967-.927-1.319C14.205,.109,13.298-.115,12.412,.059L6.411,1.259c-1.397,.28-2.411,1.518-2.411,2.941V22H0v2H24v-2h-4Zm-2-17V22h-2V4h1c.551,0,1,.448,1,1Zm-12-.8c0-.475,.338-.887,.804-.98l6-1.2c.293-.057,.598,.018,.83,.208,.233,.19,.366,.473,.366,.773V22H6V4.2Zm6,7.8c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);

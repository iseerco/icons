import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsParkingCircleSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm9,12c0,1.941-.618,3.74-1.667,5.212l-3.268-3.268c1.182-.924,1.935-2.364,1.935-3.944,0-2.757-2.243-5-5-5h-2.5c-.934,0-1.784,.368-2.412,.967l-1.3-1.3c1.472-1.049,3.271-1.667,5.212-1.667,4.963,0,9,4.038,9,9Zm-7.096-.217l-3.692-3.692c.081-.057,.18-.092,.287-.092h2.5c1.103,0,2,.897,2,2,0,.766-.442,1.449-1.096,1.783Zm-10.904,.217c0-1.941,.618-3.74,1.667-5.212l12.545,12.545c-1.472,1.049-3.271,1.667-5.212,1.667-4.963,0-9-4.038-9-9Zm4-.051l3.051,3.051h-.051v4h-3v-7.051Z"/></svg>

);

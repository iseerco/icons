import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Passport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3Zm-6.977,4.171c.37,.599,.87,2.265,.977,4.829h-1.954c.107-2.564,.607-4.23,.977-4.829Zm.977,6.829c-.107,2.564-.607,4.23-.977,4.829-.37-.599-.87-2.265-.977-4.829h1.954Zm-3.252-6.537c-.485,1.519-.648,3.384-.7,4.537h-2.935c.348-2.062,1.755-3.759,3.635-4.537Zm-.7,6.537c.052,1.153,.215,3.018,.7,4.537-1.88-.778-3.287-2.475-3.635-4.537h2.935Zm7.952,9H7v-2h10v2Zm-2.702-4.463c.485-1.519,.648-3.384,.7-4.537h2.935c-.348,2.062-1.755,3.759-3.635,4.537Zm.7-6.537c-.052-1.153-.215-3.018-.7-4.537,1.88,.778,3.287,2.475,3.635,4.537h-2.935Z"/></svg>

);

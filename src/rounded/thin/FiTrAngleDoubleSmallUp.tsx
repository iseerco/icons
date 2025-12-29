import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleDoubleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,18c-.121,0-.243-.044-.339-.133l-6.161-5.687-6.161,5.687c-.202,.188-.519,.175-.706-.028-.188-.203-.175-.52,.028-.707l6.5-6c.191-.177,.486-.177,.678,0l6.5,6c.203,.187,.216,.503,.028,.707-.099,.106-.232,.161-.367,.161Zm.365-6.159c.188-.202,.178-.518-.023-.707l-4.418-4.13c-1.295-1.295-3.564-1.283-4.836-.012l-4.43,4.142c-.201,.188-.212,.505-.023,.707,.188,.201,.504,.213,.707,.024l4.441-4.154c.918-.918,2.504-.93,3.445,.012l4.43,4.142c.097,.09,.22,.135,.342,.135,.134,0,.267-.053,.365-.159Z"/></svg>

);

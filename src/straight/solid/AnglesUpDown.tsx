import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AnglesUpDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.271,10.096l-1.398-1.431L9.824.892c.574-.573,1.348-.892,2.172-.892h.006c.821.001,1.594.321,2.176.899l7.95,7.766-1.398,1.431-7.956-7.772c-.211-.21-.484-.323-.775-.324h-.002c-.29,0-.562.112-.767.315l-7.959,7.781Zm9.498,11.585c-.206.205-.479.317-.771.318h-.002c-.29,0-.562-.112-.773-.322l-7.952-7.773-1.398,1.43,7.945,7.767c.581.58,1.354.899,2.179.899h.006c.82-.002,1.593-.32,2.17-.894l7.956-7.772-1.398-1.43-7.961,7.777Z"/>
</svg>

);

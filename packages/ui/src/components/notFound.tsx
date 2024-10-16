import { SearchX } from 'lucide-react';
import { FC } from 'react';

type NotFoundProps = {
    error?: string;
    description?: string;
    className?: string;
};

const NotFound: FC<NotFoundProps> = ({
  error = 'Not Found',
  description = 'The search did not return any results.',
  className = ''
}) => (
  <div className={`w-full h-full flex flex-col items-center justify-center space-y-4 ${className}`}>
    <SearchX className="w-16 h-16 text-primary-foreground" />
    <h1 className="text-4xl font-semibold text-primary-foreground text-center">{error}</h1>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
);

export default NotFound;

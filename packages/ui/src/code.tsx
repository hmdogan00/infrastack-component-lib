import { FC } from 'react';

interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

const Code: FC<CodeProps> = ({ children, className }) => <code className={className}>{children}</code>;

export default Code;

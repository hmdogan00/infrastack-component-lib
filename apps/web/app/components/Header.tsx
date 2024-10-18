'use client';

import { Button } from '@repo/ui';
import { PlusCircleIcon } from 'lucide-react';

const generateHeaderLinks = (activePage: string) => {
  const links = [
    { href: '/', text: 'Library' },
    { href: '/templates', text: 'Templates' }
  ];

  return links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className={`text-2xl font-semibold text-primary-foreground ${activePage === link.href ? 'underline' : ''}`}
    >
      {link.text}
    </a>
  ));
};

const Header = () => {
  const currentPath = new URL(window.location.href).pathname;

  return (
    <header className="h-7vh w-full border-b border-gray-200 px-8 flex justify-between items-center">
      <div className="flex gap-8">
        {generateHeaderLinks(currentPath)}
      </div>
      {currentPath === '/templates' && (
      <Button>
        <PlusCircleIcon className="mr-2 h-4 w-4" />
        Add Template
      </Button>
      )}
    </header>
  );
};

export default Header;

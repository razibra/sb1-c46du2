import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 LitigAI. All rights reserved.</p>
        <p className="text-sm mt-2">Compliant with Israeli legal and data protection regulations</p>
      </div>
    </footer>
  );
};

export default Footer;
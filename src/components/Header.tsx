import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Scale size={24} />
          <span className="text-xl font-bold">LitigAI</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/document-analysis">Document Analysis</Link></li>
                <li><Link to="/draft-generator">Draft Generator</Link></li>
                <li><Link to="/case-management">Case Management</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><button onClick={logout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Logout</button></li>
              </>
            ) : (
              <li><Link to="/login" className="bg-white text-blue-600 hover:bg-blue-100 px-3 py-1 rounded">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, PenTool, Database, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to LitigAI</h1>
      <p className="text-xl mb-12">AI-powered legal assistance for lawyers in Israel</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FileText size={40} />}
          title="Document Analysis"
          description="AI-powered analysis of legal documents"
          link="/document-analysis"
        />
        <FeatureCard
          icon={<PenTool size={40} />}
          title="Draft Generator"
          description="Generate legal drafts using AI"
          link="/draft-generator"
        />
        <FeatureCard
          icon={<Database size={40} />}
          title="Case Management"
          description="Manage and organize your cases"
          link="/case-management"
        />
        <FeatureCard
          icon={<BarChart size={40} />}
          title="Analytics"
          description="Track usage and effectiveness of AI tools"
          link="/analytics"
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Home;
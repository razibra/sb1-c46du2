import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, PenTool, Database, BarChart, MessageCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          icon={<FileText size={24} />}
          title="Document Analysis"
          description="Analyze legal documents using AI"
          link="/document-analysis"
        />
        <DashboardCard
          icon={<PenTool size={24} />}
          title="Draft Generator"
          description="Generate legal drafts with AI assistance"
          link="/draft-generator"
        />
        <DashboardCard
          icon={<Database size={24} />}
          title="Case Management"
          description="Manage and organize your cases"
          link="/case-management"
        />
        <DashboardCard
          icon={<BarChart size={24} />}
          title="Analytics"
          description="View insights and usage statistics"
          link="/analytics"
        />
        <DashboardCard
          icon={<MessageCircle size={24} />}
          title="Client Communication"
          description="Secure messaging with clients"
          link="/client-communication"
        />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-3">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Dashboard;
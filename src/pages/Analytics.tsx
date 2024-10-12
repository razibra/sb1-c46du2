import React from 'react';
import { BarChart2, PieChart, TrendingUp, Users } from 'lucide-react';

const Analytics: React.FC = () => {
  // Simulated data for analytics
  const analyticsData = {
    totalCases: 150,
    activeCases: 75,
    documentsAnalyzed: 500,
    draftsGenerated: 200,
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Cases"
          value={analyticsData.totalCases}
          icon={<Folder className="h-8 w-8 text-blue-500" />}
        />
        <StatCard
          title="Active Cases"
          value={analyticsData.activeCases}
          icon={<Users className="h-8 w-8 text-green-500" />}
        />
        <StatCard
          title="Documents Analyzed"
          value={analyticsData.documentsAnalyzed}
          icon={<FileText className="h-8 w-8 text-purple-500" />}
        />
        <StatCard
          title="Drafts Generated"
          value={analyticsData.draftsGenerated}
          icon={<PenTool className="h-8 w-8 text-orange-500" />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Case Status Distribution" icon={<PieChart className="h-6 w-6" />} />
        <ChartCard title="Document Analysis Trends" icon={<TrendingUp className="h-6 w-6" />} />
        <ChartCard title="AI Tool Usage" icon={<BarChart2 className="h-6 w-6" />} />
        <ChartCard title="Client Satisfaction Ratings" icon={<Users className="h-6 w-6" />} />
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium uppercase">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="bg-blue-100 rounded-full p-3">{icon}</div>
      </div>
    </div>
  );
};

interface ChartCardProps {
  title: string;
  icon: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {icon}
      </div>
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
        <p className="text-gray-500">Chart placeholder</p>
      </div>
    </div>
  );
};

export default Analytics;
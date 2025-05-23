import React from 'react';
import { Newspaper, Calendar, ArrowRight, Tag, User, Clock } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

const SafetyNews: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = React.useState<NewsArticle | null>(null);

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "New Safety Regulations for LPG Storage",
      summary: "Updated guidelines for commercial and residential LPG storage facilities aim to enhance safety measures.",
      date: "2025-03-15",
      author: "Sarah Johnson",
      readTime: "5 min",
      category: "Regulations",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      content: `The National Safety Board has introduced new regulations for LPG storage, effective from April 2025. These guidelines focus on improving ventilation requirements, mandatory safety equipment, and regular inspection protocols.

Key Changes:
• Increased minimum ventilation requirements
• Mandatory gas leak detection systems
• Quarterly professional inspections
• Updated emergency response procedures
• Enhanced storage container specifications

The new regulations aim to reduce LPG-related incidents by implementing stricter safety measures and regular monitoring systems. Facility owners have until September 2025 to comply with these updated requirements.`
    },
    {
      id: 2,
      title: "Case Study: Prevention of LPG Accidents",
      summary: "Analysis of recent incidents reveals common safety oversights and prevention strategies.",
      date: "2025-03-10",
      author: "Michael Chen",
      readTime: "8 min",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1000&q=80",
      content: `A comprehensive study of LPG-related incidents over the past year has identified key areas for improvement in safety protocols. The analysis reveals that 70% of accidents could have been prevented through proper maintenance and adherence to safety guidelines.

Key Findings:
• Regular maintenance neglect: 45% of cases
• Improper installation: 25% of cases
• Delayed leak detection: 20% of cases
• User error: 10% of cases

Recommendations:
1. Enhanced training programs
2. Regular safety audits
3. Improved maintenance schedules
4. Advanced detection systems`
    },
    {
      id: 3,
      title: "Industry Updates: Smart LPG Safety Solutions",
      summary: "Innovative technologies revolutionizing LPG safety monitoring and management.",
      date: "2025-03-05",
      author: "David Miller",
      readTime: "6 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?auto=format&fit=crop&w=1000&q=80",
      content: `The LPG industry is witnessing a technological revolution with the introduction of smart safety solutions. These innovations combine IoT sensors, AI monitoring, and automated response systems to enhance safety measures.

Featured Technologies:
• Smart leak detection sensors
• AI-powered monitoring systems
• Automated shut-off valves
• Mobile safety applications
• Remote monitoring capabilities

These advancements are expected to reduce response times to potential hazards and improve overall safety standards in both commercial and residential settings.`
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Newspaper className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Latest Safety News</h2>
        </div>
        <p className="text-gray-600">
          Stay updated with the latest news, regulations, and best practices in LPG safety.
        </p>
      </div>

      {selectedArticle ? (
        // Article Detail View
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-blue-600 mb-4 flex items-center hover:text-blue-700"
            >
              ← Back to Articles
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedArticle.title}
            </h3>
            <div className="flex items-center space-x-4 mb-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {selectedArticle.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {selectedArticle.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {selectedArticle.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {selectedArticle.category}
              </div>
            </div>
            <div className="prose max-w-none">
              {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Articles List View
        <div className="grid gap-6">
          {newsArticles.map(article => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={article.image}
                    alt={article.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime}</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-blue-600 flex items-center hover:text-blue-700"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SafetyNews;
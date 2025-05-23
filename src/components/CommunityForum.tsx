import React, { useState } from 'react';
import { MessageSquare, Users, Search, ThumbsUp, MessageCircle, Tag, Clock, Filter, Send } from 'lucide-react';

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  likes: number;
  replies: number;
  tags: string[];
  isLiked: boolean;
  comments: Comment[];
  showComments: boolean;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  isLiked: boolean;
}

const CommunityForum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newComment, setNewComment] = useState('');
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: 1,
      title: "Best practices for LPG cylinder storage",
      content: "I recently moved to a new house and want to ensure I'm storing my LPG cylinders correctly. What are the essential safety measures I should take?",
      author: "Sarah Johnson",
      date: "2025-03-15",
      category: "safety-tips",
      likes: 24,
      replies: 12,
      tags: ["storage", "safety", "residential"],
      isLiked: false,
      showComments: false,
      comments: [
        {
          id: 1,
          author: "Mike Smith",
          content: "Always store cylinders upright in a well-ventilated area away from direct sunlight.",
          date: "2025-03-15",
          likes: 5,
          isLiked: false
        },
        {
          id: 2,
          author: "Emma Davis",
          content: "Don't forget to maintain at least 3 feet distance from any electrical outlets!",
          date: "2025-03-15",
          likes: 3,
          isLiked: false
        }
      ]
    },
    {
      id: 2,
      title: "Automatic Gas Leak Detector Recommendations",
      content: "Looking for recommendations on reliable automatic gas leak detectors. Which brands and models do you trust?",
      author: "Michael Chen",
      date: "2025-03-14",
      category: "equipment",
      likes: 18,
      replies: 15,
      tags: ["equipment", "safety", "detectors"],
      isLiked: false,
      showComments: false,
      comments: [
        {
          id: 1,
          author: "Lisa Wong",
          content: "I've been using the SafeGuard Pro for 2 years now, highly recommend it!",
          date: "2025-03-14",
          likes: 7,
          isLiked: false
        }
      ]
    },
    {
      id: 3,
      title: "Monthly Maintenance Checklist Discussion",
      content: "Let's create a comprehensive monthly maintenance checklist for LPG systems. What items should be included?",
      author: "David Miller",
      date: "2025-03-13",
      category: "maintenance",
      likes: 32,
      replies: 20,
      tags: ["maintenance", "checklist", "safety"],
      isLiked: false,
      showComments: false,
      comments: [
        {
          id: 1,
          author: "John Cooper",
          content: "Regular inspection of hoses and connections is crucial.",
          date: "2025-03-13",
          likes: 9,
          isLiked: false
        }
      ]
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'safety-tips', name: 'Safety Tips' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'emergencies', name: 'Emergencies' },
    { id: 'regulations', name: 'Regulations' }
  ];

  const handleLikePost = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleLikeComment = (postId: number, commentId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map(comment => {
            if (comment.id === commentId) {
              return {
                ...comment,
                likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                isLiked: !comment.isLiked
              };
            }
            return comment;
          })
        };
      }
      return post;
    }));
  };

  const toggleComments = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          showComments: !post.showComments
        };
      }
      return post;
    }));
  };

  const addComment = (postId: number) => {
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      author: "Current User",
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      isLiked: false
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newCommentObj],
          replies: post.replies + 1
        };
      }
      return post;
    }));

    setNewComment('');
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Users className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Community Forum</h2>
        </div>
        <p className="text-gray-600">
          Join the conversation with fellow LPG users. Share experiences, ask questions,
          and learn from the community.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-6">
        {filteredPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleLikePost(post.id)}
                  className={`flex items-center transition ${
                    post.isLiked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <ThumbsUp className={`h-5 w-5 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </button>
                <button 
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition"
                >
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>{post.replies}</span>
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Comments Section */}
            {post.showComments && (
              <div className="mt-6 space-y-4">
                <div className="border-t pt-4">
                  {post.comments.map(comment => (
                    <div key={comment.id} className="bg-gray-50 rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{comment.author}</span>
                          <span className="mx-2">•</span>
                          <span>{comment.date}</span>
                        </div>
                        <button
                          onClick={() => handleLikeComment(post.id, comment.id)}
                          className={`flex items-center transition ${
                            comment.isLiked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          <ThumbsUp className={`h-4 w-4 mr-1 ${comment.isLiked ? 'fill-current' : ''}`} />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </div>

                {/* Add Comment */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => addComment(post.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Comment
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Create Post Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          Start Discussion
        </button>
      </div>
    </div>
  );
};

export default CommunityForum;
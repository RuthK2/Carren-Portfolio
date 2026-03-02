import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaHeart, FaEye, FaShare, FaCopy, FaCheck, FaFilter, FaSearch } from 'react-icons/fa';

const ProjectCard = ({ project, index, isInView }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 500) + 100);
  const [views, setViews] = useState(Math.floor(Math.random() * 5000) + 1000);
  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 80 } },
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    setShowShare(!showShare);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(project.live_url || project.github_url || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div className="group perspective-1000" variants={variants} initial="hidden" animate={controls}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      <motion.div className="relative h-full glass rounded-2xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5, transition: { duration: 0.3 } }}
        style={{ transformStyle: 'preserve-3d' }}>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 left-4 z-20 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white flex items-center gap-2 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: index * 0.15 + 0.5, type: 'spring' }}
          >
            <FaStar className="animate-pulse" /> Featured Project
          </motion.div>
        )}

        {/* Action Buttons (Top Right) */}
        <motion.div
          className="absolute top-4 right-4 z-20 flex gap-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={(e) => { e.stopPropagation(); handleShare(); }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShare />
          </motion.button>
          <motion.button
            onClick={(e) => { e.stopPropagation(); copyLink(); }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"
            initial={{ opacity: 0.5 }}
            animate={isHovered ? { opacity: 0.9 } : { opacity: 0.5 }}
          />

          {/* Hover Action Buttons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              title="View Code"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href={project.live_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white shadow-lg"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-xl" />
            </motion.a>
          </motion.div>

          {/* Image Overlay with Project Type */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <span className="px-3 py-1 rounded-full bg-primary-500/80 backdrop-blur-sm text-xs font-medium text-white">
              {project.category || 'Project'}
            </span>
            <span className="text-gray-300 text-sm">{project.year}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-1">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.slice(0, 4).map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)', y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags?.length > 4 && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={(e) => { e.stopPropagation(); handleLike(); }}
                className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaHeart className={isLiked ? 'text-red-500 fill-red-500' : ''} />
                <span className="text-sm">{likes}</span>
              </motion.button>
              <div className="flex items-center gap-1 text-gray-400">
                <FaEye />
                <span className="text-sm">{views.toLocaleString()}</span>
              </div>
            </div>
            <motion.div
              className="text-primary-400 text-sm font-medium flex items-center gap-1"
              whileHover={{ x: 5 }}
            >
              View Details →
            </motion.div>
          </div>
        </div>

        {/* Share Popup */}
        <AnimatePresence>
          {showShare && (
            <motion.div
              className="absolute bottom-20 left-4 right-4 glass rounded-xl p-4 z-30"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
            >
              <p className="text-gray-400 text-sm mb-2">Share this project:</p>
              <div className="flex gap-2">
                {['twitter', 'linkedin', 'facebook', 'copy'].map((platform) => (
                  <motion.button
                    key={platform}
                    className="flex-1 py-2 rounded-lg glass text-sm hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (platform === 'copy') copyLink();
                    }}
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Glow on Hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: '0 0 60px rgba(99, 102, 241, 0.4)' }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'name', 'year'

  const allTags = ['all', ...new Set(projects?.flatMap(p => p.tags || []).slice(0, 6))];

  const filteredProjects = projects
    ?.filter(p => {
      const matchesFilter = filter === 'all' || p.tags?.includes(filter);
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'year') return (b.year || 0) - (a.year || 0);
      return 0;
    });

  return (
    <section id="projects" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider inline-block px-4 py-2 rounded-full glass mb-4">🚀 Featured Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Things I've </span>
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A showcase of my best work in AI, backend systems, and full-stack development</p>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          className="glass rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <FaFilter className="text-primary-400" />
              {allTags.slice(0, 5).map((tag, index) => (
                <motion.button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === tag
                      ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  {tag === 'all' ? '📋 All' : tag}
                </motion.button>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg glass bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500"
              >
                <option value="featured" className="bg-dark-900">Featured</option>
                <option value="name" className="bg-dark-900">Name</option>
                <option value="year" className="bg-dark-900">Year</option>
              </select>
              <div className="flex gap-1">
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'glass text-gray-400'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⊞
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'glass text-gray-400'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ☰
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects?.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* GitHub Link */}
        <motion.div className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/MurayaSoftTouch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </motion.a>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-2xl font-bold gradient-text">{projects?.length || 0}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold gradient-text">{projects?.filter(p => p.featured).length || 0}</div>
            <div className="text-gray-400 text-sm">Featured</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🔗</div>
            <div className="text-2xl font-bold gradient-text">{projects?.filter(p => p.live_url).length || 0}</div>
            <div className="text-gray-400 text-sm">Live Demos</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-2xl font-bold gradient-text">{[...new Set(projects?.flatMap(p => p.tags || []))].length || 0}</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

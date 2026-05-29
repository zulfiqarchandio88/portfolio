import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0a0a14' }}
        >
          {/* Animated rings */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute w-24 h-24 rounded-full border-2 border-transparent"
              style={{ borderTopColor: '#6366f1', borderRightColor: '#06b6d4' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute w-16 h-16 rounded-full border-2 border-transparent"
              style={{ borderTopColor: '#8b5cf6', borderLeftColor: '#06b6d4' }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full"
              style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
            />
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold gradient-text mb-2">Zulfiqar Ali Chandio</h1>
            <p className="text-sm text-slate-400 font-mono tracking-widest uppercase">
              Senior Mobile Engineer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-8 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

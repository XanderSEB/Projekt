import { motion } from 'framer-motion';
import { ScrollAnimations } from './ScrollAnimations';
import { experience, education } from '../data/education';
import { FaGraduationCap, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

interface EducationItemCardProps {
  item: typeof experience[0];
  index: number;
}

const EducationItemCard = ({ item, index }: EducationItemCardProps) => {
  const isExperience = item.type === 'experience';
  const { t } = useTranslation();
  
  return (
    <ScrollAnimations
      key={item.id}
      direction="left"
      delay={index * 0.2}
    >
      <motion.div
        className="glass rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all overflow-hidden"
        whileHover={{ x: 10, scale: 1.02 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-3 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br rounded-full flex items-center justify-center ${
              isExperience 
                ? 'from-orange-500 to-red-500' 
                : 'from-primary-500 to-purple-500'
            }`}>
              {isExperience ? (
                <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 break-words">
              {item.degree}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-primary-400 mb-2 break-words">
              {item.field}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 break-words">
              {item.institution}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-white/60 mb-4">
              <FaCalendarAlt size={14} />
              <span>
                {item.startDate} - {item.endDate || t('common.today')}
              </span>
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-sm sm:text-base text-white/70 mb-4 break-words">{item.description}</p>
            )}

            {/* Achievements */}
            {item.achievements && item.achievements.length > 0 && (
              <div>
                <h4 className="text-sm sm:text-base text-white font-semibold mb-2 break-words">
                  {isExperience ? t('education.tasks') : t('education.achievements')}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-white/70">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="break-words">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollAnimations>
  );
};

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimations direction="fade">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{t('education.title')}</span>{' '}
              <span className="text-white">& {t('education.subtitle')}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto break-words px-4">
              {t('education.description')}
            </p>
          </div>
        </ScrollAnimations>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Erfahrung Section */}
          <div>
            <ScrollAnimations direction="fade">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <FaBriefcase className="text-orange-400" />
                <span className="gradient-text">{t('education.experience')}</span>
              </h3>
            </ScrollAnimations>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <EducationItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Ausbildung Section */}
          <div>
            <ScrollAnimations direction="fade">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-primary-400" />
                <span className="gradient-text">{t('education.training')}</span>
              </h3>
            </ScrollAnimations>
            <div className="space-y-8">
              {education.map((item, index) => (
                <EducationItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();   
  return (
    <select
      value={i18n.resolvedLanguage}
      onChange={e => i18n.changeLanguage(e.target.value)}
      style={{ padding: '0.25rem', borderRadius: 4 }}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
      <option value="ur">اردو</option>
      <option value="ar">العربية</option>
    </select>
  );
};
export default LanguageSwitcher;


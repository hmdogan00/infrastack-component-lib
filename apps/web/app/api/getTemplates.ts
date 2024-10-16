import { ChartTemplate } from '../../types';

const getTemplates = async (): Promise<ChartTemplate[]> => {
  const response = await fetch('routes/templates');
  const data = await response.json();
  return [];
  return data;
};

export default getTemplates;

import { ChartTemplate } from '../../types';

export const getTemplates = async (): Promise<ChartTemplate[]> => {
  const response = await fetch('/routes/templates');
  const data = await response.json();
  return data;
};

export const getTemplate = async (id: string): Promise<ChartTemplate> => {
  const response = await fetch(`/routes/templates/${id}`);
  return response.json();
};

export const postTemplate = async (template: ChartTemplate): Promise<ChartTemplate[]> => {
  const response = await fetch('/routes/templates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(template)
  });
  return response.json();
};

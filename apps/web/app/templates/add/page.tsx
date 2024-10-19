'use client';

import { FC, useState } from 'react';
import {
  Button, CardDescription, CardFooter, Dialog, Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem,
  CardHeader,
  CardTitle,
  Card,
  DialogTrigger,
  DialogContent,
  Input,
  DialogHeader,
  useToast
} from '@repo/ui';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import { CHART_DEMO_SET } from '../../utils/constants';
import { postTemplate } from '../../api/templates';

const WidthGridLayout = WidthProvider(GridLayout);

const CHART_LIST = CHART_DEMO_SET.map((chart) => ({ ...chart, visible: false }));

type AddTemplateDialogProps = {};

const AddTemplateDialog: FC<AddTemplateDialogProps> = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [layout, setLayout] = useState<unknown[]>([]);
  const [charts, setCharts] = useState(CHART_LIST);
  const [inputValue, setInputValue] = useState('');
  const handleValueChange = (id: string) => {
    const updatedCharts = charts.map((chart) => ({
      ...chart,
      visible: chart.id === id ? !chart.visible : chart.visible
    }));
    setCharts(updatedCharts);
  };

  const handleLayoutSave = async () => {
    const body = {
      layout_data: JSON.stringify(layout),
      title: inputValue,
      chart_count: layout.length,
      chart_data: JSON.stringify(charts.filter((chart) => chart.visible))
    };
    const result = await postTemplate(body);
    setIsDialogOpen(false);
    if (result[0]?.id) {
      toast({
        title: 'Template saved',
        description: 'Your template has been saved successfully',
        status: 'success'
      });
    } else {
      toast({
        title: 'Error',
        description: 'An error occurred while saving the template',
        status: 'error'
      });
    }
  };
  return (
    <Card className="flex flex-col min-h-93vh p-6">
      <CardHeader className="p-0">
        <CardTitle>Add a template</CardTitle>
        <CardDescription>
          Add charts, move and resize them, and click save to create a new template.
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col flex-grow space-y-4 mt-5">
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a chart" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CHART_DEMO_SET.map((chart) => (
                <SelectItem value={chart.id} key={chart.id}>{chart.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <WidthGridLayout
          className="layout"
          cols={12}
          rowHeight={85}
          style={{ minHeight: '42rem' }}
          onLayoutChange={(newLayout: unknown[]) => setLayout(() => newLayout)}
        >
          {charts.map((chart) => chart.visible && (
          <div
            key={chart.id}
            data-grid={{
              x: 0, y: 0, w: 6, h: 5
            }}
          >
            <chart.Renderer />
          </div>
          ))}
        </WidthGridLayout>

      </div>
      <CardFooter className="self-end flex-shrink">
        <Dialog open={isDialogOpen}>
          <DialogTrigger>
            <Button type="submit" onClick={() => setIsDialogOpen(true)}>Save changes</Button>
          </DialogTrigger>
          <DialogContent className="w-1/2">
            <DialogHeader>
              <h3 className="text-lg font-semibold">Save template</h3>
            </DialogHeader>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter template name" />
            <Button onClick={handleLayoutSave}>Save</Button>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default AddTemplateDialog;

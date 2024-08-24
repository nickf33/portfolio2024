export interface ListItem {
  _key: string;
  item?: string;
  itemTitle?: string;
  itemDescription?: string;
}

export interface TemplateData {
  brief?: string;
  category?: string;
  endDate?: string;
  listTitle?: string | null;
  listItems?: ListItem[] | null;
  modules?: ListItem[] | null;
  modulesListTitle?: string | null;
  skills?: ListItem[] | null;
  skillsListTitle?: string | null;
  order?: number;
  startDate?: string;
  subTitle?: string;
  title?: string;
}

export interface TemplateProps {
  data: TemplateData;
  category?: string;
  index?: number;
}

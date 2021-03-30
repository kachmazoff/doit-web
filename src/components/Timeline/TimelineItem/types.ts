export type TimelineItemType =
  | "CREATE_CHALLENGE"
  | "ACCEPT_CHALLENGE"
  | "ADD_NOTE"
  | "ADD_SUGGESTION";

export interface TimelineItemModel {
  index: string;
  type: TimelineItemType;
  created: string;
  challenge: Challenge;
  user?: User;
}

export interface TimelineItemProps {
  model: TimelineItemModel;
}

interface Challenge {
  id: string;
  created: string;
  author_id?: string;
  show_author: boolean;
  title: string;
  body?: string;
  visible_type: string;
  participants_type: string;
}

interface User {
  id: string;
  username: string;
  email: string;
}

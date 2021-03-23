export type TimelineItemType =
  | "CREATE_CHALLENGE"
  | "ACCEPT_CHALLENGE"
  | "ADD_NOTE"
  | "ADD_SUGGESTION";

export interface TimelineItemModel {
  id: string;
  type: TimelineItemType;
}

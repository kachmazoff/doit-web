interface Challenge {
  id: string;
  created: string;
  author_id?: string;
  show_author: boolean;
  title: string;
  body: string | null;
  visible_type: string;
  participants_type: string;
}

interface Participant {
  id: string;
  created: string;
  challenge_id: string;
  user_id?: string;
  team_id?: string;
  end_date?: string;
  status: string;
  anonymous: boolean;
  visible_type: string;
  challenge?: Challenge;
}

export { Challenge, Participant };
